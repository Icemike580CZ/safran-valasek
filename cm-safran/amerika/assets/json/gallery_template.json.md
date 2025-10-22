```json
{
    "variant": "photoFeed", // neměnit
    "gridCount": 3, // number of photos per row - neměnit
    "id": "galerie_template", // ID of the div
    "items": [
      // item starts
      {
        "id": 200000126, // some ID (doporučuju pokračovat v číslování)
        "title": "Title #1", // popisek
        "orientation": "orientace (portrait/landscape)", // orientace obrázku
        "aspectRatio": "1536:2048", // aspect ratio
        "size": { // velikost
          "width": 1536,
          "height": 2048
        },
        "img": { // obrázek
          "mimeType": "image/jpeg", // typ obrázku
          "src": "https://safranvalasek.cz/cm-safran/amerika/assets/images/" // zdroj
        },
        "sources": [ // zdroje
          // začátek zdroje
          {
            "mimeType": "image/jpeg", // typ obrázku
            "sizes": [
              {
                "width": 1536, // šířka
                "height": 2048, // výška
                "src": "https://safranvalasek.cz/cm-safran/amerika/assets/images/" // zdroj
              }
            ]
          }
          // konec zdroje
        ]
      }
      // item ends - items need to be separated by comma, no trailing comma accepted
    ]
  }
```