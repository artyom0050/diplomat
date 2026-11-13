// Dark app version — settings separate from the menu data in ../menu.js
window.APP = {
  // Languages offered on the entry screen. With one language the screen is skipped.
  // Add a language only when ../menu.js actually has translated texts for it.
  languages: [{ code: "en", name: "English", native: "English" }],

  // Short subtitles for the category cards. Written from the dishes in each category.
  categoryNotes: {
    dips: "Hummus, baba-ghanouj, tabbouleh & mezze",
    hot: "Falafel, halloum, boregs & fries",
    specialties: "Frog legs, quails & kibbeh",
    soups: "Vegetable, lentil & Swiss chard",
    salads: "Garden, fattoush, Greek & arugula",
    sandwiches: "On french baguette · Tue–Sat, 11am–4pm",
    wraps: "In pita bread · Tue–Sat, 11am–4pm",
    platters: "Kebabs, shawarma, fish & lamb chops",
    kids: "Chicken or beef kebab · 10 & under",
    sides: "Rice, vegetables, sauces & skewers",
    desserts: "Baklava, ashta & kunafa",
    "cold-drinks": "Lemonade, iced tea & jallab",
    "hot-drinks": "Armenian coffee & mint tea"
  },

  // Big card at the top of the home screen.
  featured: "platters"
};
