# The Diplomat — Menu

Mobile menu for The Diplomat, Glendora Mediterranean.

## How to change dishes and prices

All menu content is in `menu.js`. You can edit it right on github.com:
open `menu.js` → pencil icon (Edit) → change → **Commit changes**.
The site updates in about 1–2 minutes.

- Change a price: find the dish by name and edit `"price": 13`.
- Price with options: `"prices": [["2 oz", 4], ["8 oz", 12]]`.
- Change the description: edit the text in `"desc": "..."`.
- Remove a dish: delete its whole `{ ... }` block (including the comma between blocks).
- Add a dish: copy a neighbouring `{ ... }` block and change `n`, `name`, `desc`, `price`, `img`.
- Tags: `"tags": ["VE", "GF"]` — VE Vegan, V Vegetarian, GF Gluten Free.

Keep the quotes and commas as they are — a missing comma breaks the page.

## How to change a picture

Upload a file to the `images/` folder with exactly the name from the dish's `"img"` field
(for example `15-falafel.jpg`). If the file is missing, the site shows a placeholder.
