// Menu data: edit names, descriptions and prices here, then re-upload the site.
// "price": price in USD. "prices": variants as [label, price].
// "portion": portion size shown next to the name. "note": extra line under the description.
// "tags": VE = Vegan, V = Vegetarian, GF = Gluten Free (as printed on the paper menu).
// "compact": true = one-line row without image.
// "img": file name inside images/. If the file is missing, a placeholder is shown.
// Restaurant info (top fields) is used for AI/search files (llms.txt, schema.org). Empty fields are skipped.
// Fill in street, region (e.g. "CA"), postalCode, phone, hours when confirmed.
// After editing on GitHub, llms.txt and the search markup are rebuilt automatically.
window.MENU = {
 "name": "The Diplomat",
 "subtitle": "Glendora · Mediterranean",
 "website": "https://artyom0050.github.io/diplomat/",
 "cuisine": [
  "Mediterranean"
 ],
 "city": "Glendora",
 "region": "CA",
 "postalCode": "91741",
 "street": "171 N Glendora Ave",
 "phone": "(626) 335-7795",
 "hours": "Tuesday – Sunday 11:00 am – 9:00 pm; closed Monday",
 "notes": [
  "Halal",
  "Menu labels dishes as Vegan (VE), Vegetarian (V) and Gluten Free (GF)",
  "Wine, beer and cocktails: ask for the alcoholic beverage menu",
  "20% gratuity is applied to parties of 6 and more"
 ],
 "categories": [
  {
   "id": "dips",
   "title": "Dips & Appetizers",
   "short": "Dips",
   "items": [
    {
     "n": 1,
     "name": "Hummus",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Spread made from ground chickpeas and sesame seeds, olive oil, lemon, and garlic",
     "price": 12,
     "img": "01-hummus.jpg"
    },
    {
     "n": 2,
     "name": "Spicy Hummus",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Hummus with Sambal Oelek",
     "price": 13,
     "img": "02-spicy-hummus.jpg"
    },
    {
     "n": 3,
     "name": "Spicy Hummus with Sautéed Filet Beef",
     "tags": [
      "GF"
     ],
     "desc": "Hummus with Sambal Oelek topped with sautéed Filet Mignon",
     "price": 15,
     "img": "03-spicy-hummus-with-sauteed-filet-beef.jpg"
    },
    {
     "n": 4,
     "name": "Hummus Special with Sautéed Filet Beef",
     "tags": [
      "GF"
     ],
     "desc": "Hummus topped with sautéed Filet Mignon",
     "price": 14,
     "img": "04-hummus-special-with-sauteed-filet-beef.jpg"
    },
    {
     "n": 5,
     "name": "Baba-Ghanouj (Moutabal)",
     "tags": [
      "V",
      "GF"
     ],
     "desc": "Grilled smoked eggplant mixed with sesame paste",
     "price": 13,
     "img": "05-baba-ghanouj.jpg"
    },
    {
     "n": 6,
     "name": "Tabbouleh",
     "tags": [
      "VE"
     ],
     "desc": "Chopped parsley salad with tomatoes, green onions, cracked wheat, olive oil, and lemon juice",
     "price": 13,
     "img": "06-tabbouleh.jpg"
    },
    {
     "n": 7,
     "name": "Grape Leaves",
     "portion": "4 pieces",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "4 pieces, stuffed with seasoned rice and tomatoes, cooked with pomegranate molasses",
     "price": 13,
     "img": "07-grape-leaves.jpg"
    },
    {
     "n": 8,
     "name": "Moroccan Eggplant",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Oven roasted eggplant, onions, bell peppers, and ripe tomatoes",
     "price": 13,
     "img": "08-moroccan-eggplant.jpg"
    },
    {
     "n": 9,
     "name": "Jajike, Tzatziki",
     "tags": [
      "V",
      "GF"
     ],
     "desc": "Greek yoghurt dip with diced cucumbers, dried mint, and minced garlic",
     "price": 13,
     "img": "09-jajike-tzatziki.jpg"
    },
    {
     "n": 10,
     "name": "Spicy Lebni Plate",
     "tags": [
      "V",
      "GF"
     ],
     "desc": "Greek yoghurt dip with chopped jalapeños and garlic",
     "price": 13,
     "img": "10-spicy-lebni-plate.jpg"
    },
    {
     "n": 11,
     "name": "French Feta Cheese Plate",
     "tags": [
      "V",
      "GF"
     ],
     "desc": "Served with fresh tomatoes and cucumbers, topped with olive oil and dried oregano",
     "price": 13,
     "img": "11-french-feta-cheese-plate.jpg"
    },
    {
     "n": 12,
     "name": "Selected Olives",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Black Kalamata and seasoned, marinated green Koura olives",
     "price": 10,
     "img": "12-selected-olives.jpg"
    },
    {
     "n": 13,
     "name": "Pickle Platter",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Traditional turnip pickles marinated with beets",
     "price": 10,
     "img": "13-pickle-platter.jpg"
    },
    {
     "n": 14,
     "name": "Appetizer Sampler",
     "portion": "Combo for Two",
     "tags": [],
     "desc": "Vegetarian delight with Hummus, Tabbouleh, Baba-Ghanouj, Feta cheese, Grape leaves, and pickles",
     "price": 35,
     "img": "14-appetizer-sampler.jpg"
    }
   ]
  },
  {
   "id": "hot",
   "title": "Hot Appetizers",
   "short": "Hot Appetizers",
   "items": [
    {
     "n": 15,
     "name": "Falafel",
     "portion": "4 pcs",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Seasoned bean medley, minced garlic, onions and parsley. Fried and served with tahini sauce",
     "price": 13,
     "img": "15-falafel.jpg"
    },
    {
     "n": 16,
     "name": "Halloum",
     "portion": "4 pcs",
     "tags": [
      "V",
      "GF"
     ],
     "desc": "Pan grilled Greek sheep cheese served with fresh tomatoes and Kalamata olives",
     "price": 16,
     "img": "16-halloum.jpg"
    },
    {
     "n": 17,
     "name": "Soujouk",
     "portion": "8 pcs",
     "tags": [],
     "desc": "Spicy Armenian beef sausage slices sautéed with fresh tomatoes",
     "price": 16,
     "img": "17-soujouk.jpg"
    },
    {
     "n": 18,
     "name": "Makanek",
     "portion": "8 pcs",
     "tags": [],
     "desc": "Small Lebanese lamb sausages stuffed with pine nuts, sautéed in lemon juice",
     "price": 16,
     "img": "18-makanek.jpg"
    },
    {
     "n": 19,
     "name": "Mediterranean Spinach",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Sautéed with red onions, spices, olive oil, and lemon juice",
     "price": 13,
     "img": "19-mediterranean-spinach.jpg"
    },
    {
     "n": 20,
     "name": "Cheese Rolls",
     "portion": "4 pcs",
     "tags": [
      "V"
     ],
     "desc": "Lavash filled and rolled with mild white seasoned cheese, fried",
     "price": 13,
     "img": "20-cheese-rolls.jpg"
    },
    {
     "n": 21,
     "name": "Spinach Boreg",
     "portion": "4 pcs",
     "tags": [
      "VE"
     ],
     "desc": "Sautéed spinach and onions, seasoned and stuffed in empanada dough, fried",
     "price": 13,
     "img": "21-spinach-boreg.jpg"
    },
    {
     "n": 22,
     "name": "Potato Boreg",
     "portion": "4 pcs",
     "tags": [
      "VE"
     ],
     "desc": "Mashed potato, seasoned, and stuffed in empanada dough, fried",
     "price": 13,
     "img": "22-potato-boreg.jpg"
    },
    {
     "n": 23,
     "name": "Soujouk Boreg",
     "portion": "4 pcs",
     "tags": [],
     "desc": "Spicy Armenian beef sausage with white mozzarella cheese, stuffed in empanada dough, fried",
     "price": 15,
     "img": "23-soujouk-boreg.jpg"
    },
    {
     "n": 24,
     "name": "Sambousek",
     "tags": [],
     "desc": "Ground beef, onions, and spices, stuffed in empanada dough, fried",
     "price": 15,
     "img": "24-sambousek.jpg"
    },
    {
     "n": 25,
     "name": "Fried Brussels Sprouts",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Fried and seasoned with garlic and spices",
     "price": 15,
     "img": "25-fried-brussel-sprouts.jpg"
    },
    {
     "n": 26,
     "name": "Fried Cauliflower",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Seasoned with minced garlic, parsley, and lemon juice",
     "price": 15,
     "img": "26-fried-cauliflower.jpg"
    },
    {
     "n": 27,
     "name": "French Fries",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "",
     "price": 9,
     "img": "27-french-fries.jpg"
    },
    {
     "n": 28,
     "name": "Garlic Fries",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Seasoned with fresh minced garlic and parsley",
     "price": 11,
     "img": "28-garlic-fries.jpg"
    },
    {
     "n": 29,
     "name": "Hot Appetizer Sampler",
     "tags": [],
     "desc": "2 cheese rolls, 2 potato boreg, 2 spinach boreg, 2 soujouk boreg, 2 sambousek",
     "price": 45,
     "img": "29-hot-appetizer-sampler.jpg"
    }
   ]
  },
  {
   "id": "specialties",
   "title": "Mediterranean Specialties",
   "short": "Specialties",
   "items": [
    {
     "n": 30,
     "name": "Sautéed Frog Legs",
     "portion": "1 lb",
     "tags": [],
     "desc": "Tender frog legs, seasoned and pan sautéed with garlic, lemon, and cilantro",
     "price": 35,
     "img": "30-sauteed-frog-legs.jpg"
    },
    {
     "n": 31,
     "name": "Sautéed Quails",
     "portion": "4 pcs",
     "tags": [],
     "desc": "Fresh quails, seasoned and pan sautéed with crushed garlic and lemon juice",
     "price": 35,
     "img": "31-sauteed-quails.jpg"
    },
    {
     "n": 32,
     "name": "Kibbeh Nayyeh (Chee-Kufte)",
     "tags": [],
     "desc": "An authentic Lebanese dish made from finely minced beef tartare with cracked wheat and seasoning",
     "price": 27,
     "img": "32-kibbeh-nayyeh.jpg"
    },
    {
     "n": 33,
     "name": "Fried Kibbeh",
     "portion": "4 pcs",
     "tags": [],
     "desc": "Ground Beef, onions, salt, 7 spices, black pepper",
     "price": 15,
     "img": "33-fried-kibbeh.jpg"
    }
   ]
  },
  {
   "id": "soups",
   "title": "Homemade Soups",
   "short": "Soups",
   "items": [
    {
     "n": 34,
     "name": "Vegetable Soup",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Mix of fresh zucchini, carrots, celery, potatoes, and leek cooked in lemon and tomato broth with extra virgin olive oil",
     "price": 14,
     "img": "34-vegetable-soup.jpg"
    },
    {
     "n": 35,
     "name": "Swiss Chard Lentil Soup",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Brown lentils cooked with flavors of fresh Swiss chard, potatoes, cilantro, and roasted garlic in lemon broth with extra virgin olive oil",
     "price": 14,
     "img": "35-swiss-chard-lentil-soup.jpg"
    },
    {
     "n": 36,
     "name": "Red Lentil Soup",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Red lentils cooked with potatoes, red peppers, and onions in cumin-infused vegetable broth with extra virgin olive oil",
     "price": 14,
     "img": "36-red-lentil-soup.jpg"
    },
    {
     "n": 37,
     "compact": true,
     "name": "Add Grilled Chicken",
     "portion": "3 pcs",
     "tags": [],
     "desc": "",
     "price": 13,
     "img": "37-add-grilled-chicken.jpg"
    },
    {
     "n": 38,
     "compact": true,
     "name": "Add Grilled Beef",
     "portion": "3 pcs",
     "tags": [],
     "desc": "",
     "price": 14,
     "img": "38-add-grilled-beef.jpg"
    }
   ]
  },
  {
   "id": "salads",
   "title": "Fresh Salads",
   "short": "Salads",
   "items": [
    {
     "n": 39,
     "name": "Garden Salad",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Fresh romaine lettuce, spring mix, tomatoes, cucumber, and onions served with our special dressing",
     "note": "Add a piece of salmon or cod $24",
     "price": 15,
     "img": "39-garden-salad.jpg"
    },
    {
     "n": 40,
     "name": "Fattoush Salad",
     "tags": [
      "VE"
     ],
     "desc": "Romaine lettuce, tomatoes, cucumbers, spring mix, onions, fresh mint, and pita chips, tossed with light garlic dressing",
     "note": "Add a piece of salmon or cod $24",
     "price": 16,
     "img": "40-fattoush-salad.jpg"
    },
    {
     "n": 41,
     "name": "Greek Salad",
     "tags": [
      "V",
      "GF"
     ],
     "desc": "Romaine lettuce, tomatoes, cucumber, spring mix, onions, Kalamata olives, feta cheese, with olive oil and lemon juice dressing",
     "note": "Add a piece of salmon or cod $24",
     "price": 17,
     "img": "41-greek-salad.jpg"
    },
    {
     "n": 42,
     "name": "Arugula Salad",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Fresh arugula leaves, tomatoes, oranges, cucumber, and onions with sumac, olive oil, and lemon juice dressing",
     "note": "Add a piece of salmon or cod $25",
     "price": 18,
     "img": "42-arugula-salad.jpg"
    },
    {
     "n": 43,
     "name": "Chicken Salad",
     "tags": [
      "GF"
     ],
     "desc": "Grilled chicken kebab on garden salad",
     "price": 20,
     "img": "43-chicken-salad.jpg"
    },
    {
     "n": 44,
     "name": "Filet Beef Salad",
     "tags": [
      "GF"
     ],
     "desc": "Grilled filet mignon kebab on garden salad",
     "price": 22,
     "img": "44-filet-beef-salad.jpg"
    },
    {
     "n": 45,
     "name": "Chicken Fattoush Salad",
     "tags": [],
     "desc": "Grilled chicken breast kebab on fattoush salad",
     "price": 20,
     "img": "45-chicken-fattoush-salad.jpg"
    },
    {
     "n": 46,
     "name": "Filet Beef Fattoush Salad",
     "tags": [],
     "desc": "Grilled filet mignon kebab on fattoush salad",
     "price": 24,
     "img": "46-filet-beef-fattoush-salad.jpg"
    },
    {
     "n": 47,
     "name": "Chicken Greek Salad",
     "tags": [
      "GF"
     ],
     "desc": "Grilled chicken breast kebab on Greek salad",
     "price": 22,
     "img": "47-chicken-greek-salad.jpg"
    },
    {
     "n": 48,
     "name": "Filet Beef Greek Salad",
     "tags": [
      "GF"
     ],
     "desc": "Grilled filet mignon kebab on Greek salad",
     "price": 24,
     "img": "48-filet-beef-greek-salad.jpg"
    },
    {
     "n": 49,
     "name": "Chicken Arugula Salad",
     "tags": [
      "GF"
     ],
     "desc": "Grilled chicken breast kebab on arugula salad",
     "price": 21,
     "img": "49-chicken-arugula-salad.jpg"
    },
    {
     "n": 50,
     "name": "Filet Beef Arugula Salad",
     "tags": [
      "GF"
     ],
     "desc": "Grilled filet mignon kebab on arugula salad",
     "price": 24,
     "img": "50-filet-beef-arugula-salad.jpg"
    }
   ]
  },
  {
   "id": "sandwiches",
   "title": "Mediterranean Sandwiches",
   "short": "Sandwiches",
   "note": "Served Tuesday – Saturday, 11am – 4pm. Served on french baguette, with a side of hummus and pickles",
   "items": [
    {
     "n": 51,
     "name": "Lule Sandwich",
     "tags": [],
     "desc": "Lule kebab, pickles, onions, grilled tomato, grilled anaheim pepper, red pepper paste, and parsley",
     "price": 21,
     "img": "51-lule-sandwich.jpg"
    },
    {
     "n": 52,
     "name": "Chicken Shawarma Sandwich",
     "tags": [],
     "desc": "Chicken shawarma, pickles, tomatoes, french fries, garlic paste, parsley, and tahini sauce or hummus",
     "price": 19,
     "img": "52-chicken-shawarma-sandwich.jpg"
    }
   ]
  },
  {
   "id": "wraps",
   "title": "Mediterranean Wrap Combos",
   "short": "Wraps",
   "note": "Served Tuesday – Saturday, 11am – 4pm. Wrapped in pita bread, with a side of hummus and pickles",
   "items": [
    {
     "n": 53,
     "name": "Falafel Wrap",
     "tags": [
      "VE"
     ],
     "desc": "Fried falafel rolled with lettuce, tomatoes, pickles, and tahini sauce",
     "price": 16,
     "img": "53-falafel-wrap.jpg"
    },
    {
     "n": 54,
     "name": "Chicken Kebab Wrap",
     "tags": [],
     "desc": "Chicken breast kebab rolled with lettuce, pickles, tomatoes, and garlic paste",
     "price": 17,
     "img": "54-chicken-kebab-wrap.jpg"
    },
    {
     "n": 55,
     "name": "Beef Kebab Wrap",
     "tags": [],
     "desc": "Filet mignon kebab rolled with lettuce, pickles, tomatoes, and hummus",
     "price": 19,
     "img": "55-beef-kebab-wrap.jpg"
    },
    {
     "n": 56,
     "name": "Lule Kebab Wrap",
     "tags": [],
     "desc": "Lule Kebab rolled with lettuce, pickles, tomatoes, and hummus",
     "price": 19,
     "img": "56-lule-kebab-wrap.jpg"
    },
    {
     "n": 57,
     "name": "Beef Shawarma Wrap",
     "tags": [],
     "desc": "Pan grilled filet mignon with onions and rolled with fries, tomatoes, onions, pickles, and tahini sauce",
     "price": 19,
     "img": "57-beef-shawarma-wrap.jpg"
    },
    {
     "n": 58,
     "name": "Chicken Shawarma Wrap",
     "tags": [],
     "desc": "Chicken shawarma rolled with fries, lettuce, tomatoes, pickles, and tahini sauce",
     "price": 17,
     "img": "58-chicken-shawarma-wrap.jpg"
    }
   ]
  },
  {
   "id": "platters",
   "title": "Mediterranean Platters",
   "short": "Platters",
   "items": [
    {
     "n": 59,
     "name": "Falafel",
     "tags": [
      "VE",
      "GF"
     ],
     "desc": "Bean medley seasoned with spices, garlic, onions, fried. Served on a bed of lettuce with pickles, tahini sauce, and hummus",
     "price": 18,
     "img": "59-falafel.jpg"
    },
    {
     "n": 60,
     "name": "Chicken Kebab",
     "tags": [],
     "desc": "Chicken breast, marinated and grilled, served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $3",
     "price": 20,
     "img": "60-chicken-kebab.jpg"
    },
    {
     "n": 61,
     "name": "Beef Filet Kebab",
     "tags": [],
     "desc": "Lean tender filet mignon, marinated and grilled, served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $3",
     "price": 23,
     "img": "61-beef-filet-kebab.jpg"
    },
    {
     "n": 62,
     "name": "Lule Kebab",
     "tags": [],
     "desc": "Lean ground filet beef mixed with onions and spices, grilled. Served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $3",
     "price": 22,
     "img": "62-lule-kebab.jpg"
    },
    {
     "n": 63,
     "name": "Salmon Fillet",
     "tags": [],
     "desc": "Seasoned salmon fillet pan flamed with olive oil, lemon juice and garlic. Served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $3",
     "price": 24,
     "img": "63-salmon-fillet.jpg"
    },
    {
     "n": 64,
     "name": "Cod Fillet",
     "tags": [],
     "desc": "Seasoned cod fillet pan flamed with olive oil, lemon juice and garlic. Served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $3",
     "price": 22,
     "img": "64-cod-fillet.jpg"
    },
    {
     "n": 65,
     "name": "New Zealand Lamb Chops",
     "portion": "4 pcs",
     "tags": [],
     "desc": "Seasoned and marinated for 24 hours, grilled and served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $3",
     "price": 36,
     "img": "65-new-zealand-lamb-chops.jpg"
    },
    {
     "n": 66,
     "name": "Combo for Two",
     "tags": [],
     "desc": "1 Chicken, 1 Beef, and 1 Lule Kebab. Served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $6",
     "price": 37,
     "img": "66-combo-for-two.jpg"
    },
    {
     "n": 67,
     "name": "Combo for Six",
     "tags": [],
     "desc": "3 Chicken, 2 Beef, and 3 Lule Kebabs. Served with rice pilaf and grilled vegetables",
     "note": "Substitute rice with a bed of spinach for $6",
     "price": 98,
     "img": "67-combo-for-six.jpg"
    },
    {
     "n": 68,
     "name": "Beef Shawarma",
     "tags": [],
     "desc": "Sliced filet mignon, pan cooked with grilled onions and served with tahini sauce, rice pilaf, and hummus",
     "price": 24,
     "img": "68-beef-shawarma.jpg"
    },
    {
     "n": 69,
     "name": "Beef Shawarma Fries",
     "tags": [
      "GF"
     ],
     "desc": "Served with fries, fresh chopped onion, tomatoes, pickles, and tahini sauce",
     "price": 22,
     "img": "69-beef-shawarma-fries.jpg"
    },
    {
     "n": 70,
     "name": "Chicken Shawarma",
     "tags": [],
     "desc": "Sliced chicken breast seasoned with 7 spices and served with tahini sauce, rice pilaf, and hummus",
     "price": 21,
     "img": "70-chicken-shawarma.jpg"
    },
    {
     "n": 71,
     "name": "Chicken Shawarma Fries",
     "tags": [
      "GF"
     ],
     "desc": "Served with fries, fresh chopped onion, tomatoes, pickles, and tahini sauce",
     "price": 21,
     "img": "71-chicken-shawarma-fries.jpg"
    },
    {
     "n": 72,
     "name": "Falafel Fries",
     "tags": [
      "GF"
     ],
     "desc": "Served with fries, fresh chopped onion, tomatoes, pickles, and tahini sauce",
     "price": 19,
     "img": "72-falafel-fries.jpg"
    },
    {
     "n": 73,
     "compact": true,
     "name": "Extra Skewers",
     "tags": [],
     "desc": "",
     "prices": [
      [
       "Chicken",
       15
      ],
      [
       "Lule",
       16
      ],
      [
       "Beef",
       17
      ]
     ],
     "img": "73-extra-skewers.jpg"
    }
   ]
  },
  {
   "id": "kids",
   "title": "Kids Platters",
   "short": "Kids",
   "items": [
    {
     "n": 74,
     "name": "Chicken Kebab",
     "tags": [],
     "desc": "Served with rice or french fries (10 & under)",
     "price": 14,
     "img": "74-chicken-kebab.jpg"
    },
    {
     "n": 75,
     "name": "Beef Kebab",
     "tags": [],
     "desc": "Served with rice or french fries (10 & under)",
     "price": 16,
     "img": "75-beef-kebab.jpg"
    }
   ]
  },
  {
   "id": "sides",
   "title": "Side Orders",
   "short": "Sides",
   "items": [
    {
     "n": 76,
     "name": "Rice",
     "tags": [],
     "desc": "",
     "price": 9,
     "img": "76-rice.jpg"
    },
    {
     "n": 77,
     "name": "Grilled Vegetables",
     "tags": [],
     "desc": "",
     "price": 6,
     "img": "77-grilled-vegetables.jpg"
    },
    {
     "n": 78,
     "name": "Grated Feta Cheese",
     "tags": [],
     "desc": "",
     "price": 4,
     "img": "78-grated-feta-cheese.jpg"
    },
    {
     "n": 79,
     "name": "Mediterranean Spinach",
     "tags": [],
     "desc": "Sautéed with red onions, spices, olive oil, and lemon juice",
     "price": 10,
     "img": "79-mediterranean-spinach.jpg"
    },
    {
     "n": 80,
     "compact": true,
     "name": "Garlic Sauce",
     "tags": [],
     "desc": "",
     "prices": [
      [
       "2 oz",
       4
      ],
      [
       "8 oz",
       12
      ]
     ],
     "img": "80-garlic-sauce.jpg"
    },
    {
     "n": 81,
     "compact": true,
     "name": "Tahini Sauce",
     "portion": "2 oz",
     "tags": [],
     "desc": "",
     "price": 4,
     "img": "81-tahini-sauce.jpg"
    },
    {
     "n": 82,
     "name": "Sliced Cucumbers",
     "tags": [],
     "desc": "",
     "price": 7,
     "img": "82-sliced-cucumbers.jpg"
    },
    {
     "n": 83,
     "name": "Sliced Jalapeños",
     "tags": [],
     "desc": "",
     "price": 4,
     "img": "83-sliced-jalapenos.jpg"
    },
    {
     "n": 84,
     "compact": true,
     "name": "Extra Chicken Skewer",
     "tags": [],
     "desc": "",
     "price": 15,
     "img": "84-extra-chicken-skewer.jpg"
    },
    {
     "n": 85,
     "compact": true,
     "name": "Extra Beef Skewer",
     "tags": [],
     "desc": "",
     "price": 17,
     "img": "85-extra-beef-skewer.jpg"
    },
    {
     "n": 86,
     "compact": true,
     "name": "Extra Lule Skewer",
     "tags": [],
     "desc": "",
     "price": 16,
     "img": "86-extra-lule-skewer.jpg"
    }
   ]
  },
  {
   "id": "desserts",
   "title": "Desserts",
   "short": "Desserts",
   "items": [
    {
     "n": 87,
     "name": "Baklava",
     "tags": [],
     "desc": "",
     "price": 5,
     "img": "87-baklava.jpg"
    },
    {
     "n": 88,
     "name": "Diplomat Sweet",
     "tags": [],
     "desc": "",
     "price": 8,
     "img": "88-diplomat-sweet.jpg"
    },
    {
     "n": 89,
     "name": "Ashta",
     "tags": [],
     "desc": "",
     "price": 10,
     "img": "89-ashta.jpg"
    },
    {
     "n": 90,
     "name": "Kunafa",
     "tags": [],
     "desc": "",
     "price": 6,
     "img": "90-kunafa.jpg"
    }
   ]
  },
  {
   "id": "cold-drinks",
   "title": "Cold Drinks",
   "short": "Cold Drinks",
   "items": [
    {
     "n": 91,
     "compact": true,
     "name": "Soft Drinks",
     "tags": [],
     "desc": "",
     "price": 4,
     "img": "91-soft-drinks.jpg"
    },
    {
     "n": 92,
     "compact": true,
     "name": "Fresh Brewed Iced Tea",
     "tags": [],
     "desc": "",
     "price": 4,
     "img": "92-fresh-brewed-iced-tea.jpg"
    },
    {
     "n": 93,
     "compact": true,
     "name": "Lemonade",
     "tags": [],
     "desc": "",
     "price": 4,
     "img": "93-lemonade.jpg"
    },
    {
     "n": 94,
     "compact": true,
     "name": "Water",
     "portion": "Sparkling or Flat",
     "tags": [],
     "desc": "",
     "price": 5,
     "img": "94-water.jpg"
    },
    {
     "n": 95,
     "name": "Jallab",
     "tags": [],
     "desc": "Carob, Dates, Rose, and Grape",
     "price": 5,
     "img": "95-jallab.jpg"
    }
   ]
  },
  {
   "id": "hot-drinks",
   "title": "Hot Drinks",
   "short": "Hot Drinks",
   "items": [
    {
     "n": 96,
     "compact": true,
     "name": "American Coffee",
     "tags": [],
     "desc": "",
     "price": 5,
     "img": "96-american-coffee.jpg"
    },
    {
     "n": 97,
     "name": "Armenian Coffee",
     "tags": [],
     "desc": "",
     "price": 5,
     "img": "97-armenian-coffee.jpg"
    },
    {
     "n": 98,
     "name": "Arabic Tea with Mint",
     "tags": [],
     "desc": "Or variety of teas",
     "price": 5,
     "img": "98-arabic-tea-with-mint.jpg"
    }
   ]
  }
 ],
 "openingHours": [
  "Tu-Su 11:00-21:00"
 ]
};
