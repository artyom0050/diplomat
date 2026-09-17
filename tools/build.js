// Rebuilds search/AI files from menu.js:
//   llms.txt, sitemap.xml, schema.org JSON-LD and a static text menu inside index.html.
// Run: node tools/build.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "menu.js"), "utf8"), ctx);
const M = ctx.window.MENU;
const url = M.website;
const DIETS = { VE: "Vegan", V: "Vegetarian", GF: "Gluten Free" };
const SCHEMA_DIET = { VE: "https://schema.org/VeganDiet", V: "https://schema.org/VegetarianDiet", GF: "https://schema.org/GlutenFreeDiet" };

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const priceText = it => it.prices ? it.prices.map(([l, p]) => `${l} $${p}`).join(", ") : `$${it.price}`;
const location = [M.street, M.city, [M.region, M.postalCode].filter(Boolean).join(" ")].filter(Boolean).join(", ");

// llms.txt
const lines = [
  `# ${M.name}`, "",
  `> ${M.cuisine.join(", ")} restaurant at ${location}. Full menu with prices below.`, "",
  `- Menu website: ${url}`,
  M.phone ? `- Phone: ${M.phone}` : null,
  M.hours ? `- Hours: ${M.hours}` : null,
  ...M.notes.map(n => `- ${n}`),
  "", "## Menu (prices in USD)", ""
];
for (const c of M.categories) {
  lines.push(`### ${c.title}`);
  if (c.note) lines.push(c.note);
  lines.push("");
  for (const it of c.items) {
    const extra = [it.portion, it.tags.map(t => DIETS[t]).join(", ")].filter(Boolean).join("; ");
    lines.push(`- ${it.name}${extra ? ` (${extra})` : ""}: ${priceText(it)}${it.desc ? ` — ${it.desc}` : ""}${it.note ? `. ${it.note}` : ""}`);
  }
  lines.push("");
}
fs.writeFileSync(path.join(root, "llms.txt"), lines.filter(l => l !== null).join("\n"));

// sitemap.xml
fs.writeFileSync(path.join(root, "sitemap.xml"),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${url}</loc></url>
  <url><loc>${url}llms.txt</loc></url>
</urlset>
`);

// schema.org JSON-LD
const address = Object.fromEntries(Object.entries({
  "@type": "PostalAddress", streetAddress: M.street, addressLocality: M.city,
  addressRegion: M.region, postalCode: M.postalCode, addressCountry: "US"
}).filter(([, v]) => v));
const menuItem = it => ({
  "@type": "MenuItem",
  name: it.name,
  ...(it.desc ? { description: it.desc } : {}),
  ...(it.tags.length ? { suitableForDiet: it.tags.map(t => SCHEMA_DIET[t]) } : {}),
  offers: it.prices
    ? it.prices.map(([l, p]) => ({ "@type": "Offer", name: l, price: p, priceCurrency: "USD" }))
    : { "@type": "Offer", price: it.price, priceCurrency: "USD" }
});
const ld = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: M.name,
  url,
  servesCuisine: M.cuisine,
  address,
  ...(M.phone ? { telephone: M.phone } : {}),
  ...(M.openingHours && M.openingHours.length ? { openingHours: M.openingHours } : {}),
  hasMenu: {
    "@type": "Menu",
    url,
    hasMenuSection: M.categories.map(c => ({
      "@type": "MenuSection",
      name: c.title,
      ...(c.note ? { description: c.note } : {}),
      hasMenuItem: c.items.map(menuItem)
    }))
  }
};
const seo = `<!-- SEO:START -->
<meta name="description" content="${esc(`${M.name} — ${M.cuisine.join(", ")} restaurant at ${location}. Menu with prices: dips, kebabs, shawarma, salads, soups, desserts.`)}">
<link rel="canonical" href="${url}">
<link rel="alternate" type="text/plain" title="LLM-friendly menu" href="llms.txt">
<meta property="og:title" content="${esc(M.name)} — Menu">
<meta property="og:type" content="restaurant.menu">
<meta property="og:url" content="${url}">
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>
<!-- SEO:END -->`;

// Static text menu (replaced by the app at runtime; read by bots that do not run JavaScript)
const staticMenu = `<!-- STATIC-MENU:START -->
${M.categories.map(c => `<section><h2>${esc(c.title)}</h2>${c.note ? `<p>${esc(c.note)}</p>` : ""}
<ul>${c.items.map(it => `<li><strong>${esc(it.name)}</strong>${it.portion ? ` (${esc(it.portion)})` : ""} — ${esc(priceText(it))}${it.desc ? `. ${esc(it.desc)}` : ""}</li>`).join("")}</ul></section>`).join("\n")}
<!-- STATIC-MENU:END -->`;

const indexPath = path.join(root, "index.html");
let html = fs.readFileSync(indexPath, "utf8");
html = html.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, () => seo);
html = html.replace(/<!-- STATIC-MENU:START -->[\s\S]*?<!-- STATIC-MENU:END -->/, () => staticMenu);
fs.writeFileSync(indexPath, html);
console.log(`Built: ${M.categories.reduce((n, c) => n + c.items.length, 0)} items`);
