// Consent banner + Google tag (GA4 / Google Ads) + Meta Pixel.
// Trackers are loaded only after the guest taps "Accept".
(function () {
  const cfg = window.TRACKING || {};
  const ids = [cfg.ga4, cfg.googleAds].filter(Boolean);
  const pixel = cfg.metaPixel;
  const KEY = "diplomat-consent";
  const banner = document.getElementById("consent");
  const legal = document.getElementById("legal");
  const settingsLink = document.getElementById("cookie-settings");
  let loaded = false;

  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = v => { try { localStorage.setItem(KEY, v); } catch (e) {} };

  function loadMetaPixel() {
    if (!pixel || window.fbq) return;
    const fbq = window.fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    window._fbq = fbq;
    fbq.push = fbq; fbq.loaded = true; fbq.version = "2.0"; fbq.queue = [];
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.append(s);
    fbq("init", pixel);
    fbq("track", "PageView");
  }

  function loadTrackers() {
    if (loaded) return;
    loaded = true;
    loadMetaPixel();
    if (ids.length) loadGoogleTag();
  }

  function loadGoogleTag() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("consent", "default", {
      ad_storage: "granted", analytics_storage: "granted",
      ad_user_data: "granted", ad_personalization: "granted"
    });
    gtag("js", new Date());
    ids.forEach(id => gtag("config", id));
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ids[0]);
    document.head.append(s);
  }

  // Called by the menu when a guest opens a dish card
  window.trackDishView = function (it) {
    if (!loaded) return;
    if (window.fbq) fbq("track", "ViewContent", {
      content_ids: [String(it.n)], content_name: it.name, content_type: "product",
      value: it.price || 0, currency: "USD"
    });
    if (!window.gtag) return;
    gtag("event", "view_item", {
      currency: "USD",
      value: it.price || 0,
      items: [{ item_id: String(it.n), item_name: it.name, price: it.price || 0 }]
    });
  };

  function choose(v) {
    save(v);
    banner.hidden = true;
    if (v === "granted") loadTrackers();
    else if (loaded) location.reload(); // stop tracking that already started this visit
  }

  if (!ids.length && !pixel) return; // nothing configured: no banner, no trackers
  legal.hidden = false;
  document.getElementById("consent-accept").addEventListener("click", () => choose("granted"));
  document.getElementById("consent-decline").addEventListener("click", () => choose("denied"));
  settingsLink.addEventListener("click", e => { e.preventDefault(); banner.hidden = false; });

  const state = read();
  if (state === "granted") loadTrackers();
  else if (state !== "denied") banner.hidden = false;
})();
