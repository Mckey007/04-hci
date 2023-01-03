//@return all Shopping Items as Array
function getItems() {
    return [
            // hats
            {
                id: 001,
                name: "Wintermütze mit Streifen, Zipfel",
                pictures: {
                    "blau": "assets/png/clothing/hats/Muetze_1.png",
                    "rot": "assets/png/clothing/hats/Muetze_2.png",
                    "gelb": "assets/png/clothing/hats/Muetze_3.png",
                    "grün": "assets/png/clothing/hats/Muetze_4.png",
                    "lila": "assets/png/clothing/hats/Muetze_5.png",
                    "grau": "assets/png/clothing/hats/Muetze_6.png",
                    "pink": "assets/png/clothing/hats/Muetze_7.png",
                    "braun": "assets/png/clothing/hats/Muetze_8.png"
                },
                category: "hat",
                price: "19.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "hat"]
            },
            {
                id: 002,
                name: "Wintermütze mit Streifen",
                pictures: {
                    "blau": "assets/png/clothing/hats/Muetze_9.png",
                    "rot": "assets/png/clothing/hats/Muetze_10.png",
                    "gelb": "assets/png/clothing/hats/Muetze_11.png",
                    "grün": "assets/png/clothing/hats/Muetze_12.png",
                    "lila": "assets/png/clothing/hats/Muetze_13.png",
                    "grau": "assets/png/clothing/hats/Muetze_14.png",
                    "pink": "assets/png/clothing/hats/Muetze_15.png",
                    "braun": "assets/png/clothing/hats/Muetze_16.png"
                },
                category: "hat",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female","winter", "hat"]
            },
            {
                id: 003,
                name: "Wintermütze",
                pictures: {
                    "blau": "assets/png/clothing/hats/Muetze_17.png",
                    "rot": "assets/png/clothing/hats/Muetze_18.png",
                    "gelb": "assets/png/clothing/hats/Muetze_19.png",
                    "grün": "assets/png/clothing/hats/Muetze_20.png",
                    "lila": "assets/png/clothing/hats/Muetze_21.png",
                    "grau": "assets/png/clothing/hats/Muetze_22.png",
                    "pink": "assets/png/clothing/hats/Muetze_23.png",
                    "dunkelrot": "assets/png/clothing/hats/Muetze_24.png"
                },
                category: "hat",
                price: "9.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "hat"]
            },
            {
                id: 004,
                name: "Cap",
                pictures: {
                    "blau": "assets/png/clothing/hats/Muetze_25.png",
                    "rot": "assets/png/clothing/hats/Muetze_26.png",
                    "gelb": "assets/png/clothing/hats/Muetze_27.png",
                    "grün": "assets/png/clothing/hats/Muetze_28.png",
                    "lila": "assets/png/clothing/hats/Muetze_29.png",
                    "grau": "assets/png/clothing/hats/Muetze_30.png",
                    "pink": "assets/png/clothing/hats/Muetze_31.png",
                    "dunkelrot": "assets/png/clothing/hats/Muetze_32.png"
                },
                category: "hat",
                price: "19.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "hat"]
            },
            {
                id: 005,
                name: "Zylinder",
                pictures: {
                    "schwarz": "assets/png/clothing/hats/Muetze_33.png",
                    "grau": "assets/png/clothing/hats/Muetze_34.png",
                    "orange": "assets/png/clothing/hats/Muetze_35.png",
                },
                category: "hat",
                price: "19.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "hat"]
            },
            // earrings
            {
                id: 006,
                name: "Ohrring #1",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_1.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 007,
                name: "Ohrring #2",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_2.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 108,
                name: "Ohrring #3",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_3.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 109,
                name: "Ohrring #4",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_4.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 010,
                name: "Ohrring #5",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_5.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 011,
                name: "Ohrring #6",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_6.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 012,
                name: "Ohrring #7",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_7.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 013,
                name: "Ohrring #8",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_8.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 014,
                name: "Ohrring #9",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_9.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 015,
                name: "Ohrring #10",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_10.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 016,
                name: "Ohrring #11",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_11.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            {
                id: 017,
                name: "Ohrring #12",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_12.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "earring"]
            },
            // glasses
            {
                id: 021,
                name: "Brille #1",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_1.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 022,
                name: "Brille #2",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_2.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 023,
                name: "Brille #3",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_3.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 024,
                name: "Brille #4",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_4.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 025,
                name: "Brille #5",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_5.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 026,
                name: "Brille #6",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_6.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 027,
                name: "Brille #7",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_7.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 128,
                name: "Brille #8",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_8.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 129,
                name: "Brille #9",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_9.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 030,
                name: "Brille #10",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_10.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 031,
                name: "Brille #11",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_11.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 032,
                name: "Brille #12",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_12.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            {
                id: 033,
                name: "Brille #13",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_13.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "summer", "spring", "fall", "glasses"]
            },
            // scarves
            {
                id: 040,
                name: "Schal",
                pictures: {
                    "blau": "assets/png/clothing/scarfs/scarf_1.png",
                    "rot": "assets/png/clothing/scarfs/scarf_2.png",
                    "gelb": "assets/png/clothing/scarfs/scarf_3.png",
                    "grün": "assets/png/clothing/scarfs/scarf_4.png",
                    "lila": "assets/png/clothing/scarfs/scarf_5.png",
                    "grau": "assets/png/clothing/scarfs/scarf_6.png",
                    "pink": "assets/png/clothing/scarfs/scarf_7.png",
                    "dunkelrot": "assets/png/clothing/scarfs/scarf_18.png"
                },
                category: "scarf",
                price: "9.99",
                size: ["Standard"],
                filter: ["male", "female", "winter", "scarf"]
            },
            // gloves
            {
                id: 041,
                name: "Handschuhe Herren",
                pictures: {
                    "blau": "assets/png/clothing/gloves/gloves_m_1.png",
                    "rot":  "assets/png/clothing/gloves/gloves_m_2.png",
                    "gelb": "assets/png/clothing/gloves/gloves_m_3.png",
                    "grün": "assets/png/clothing/gloves/gloves_m_4.png",
                    "lila": "assets/png/clothing/gloves/gloves_m_5.png",
                    "grau": "assets/png/clothing/gloves/gloves_m_6.png",
                    "pink": "assets/png/clothing/gloves/gloves_m_7.png",
                    "dunkelrot": "assets/png/clothing/gloves/gloves_m_8.png"
                },
                category: "gloves",
                price: "9.99",
                size: ["Standard"],
                filter: ["male", "winter", "gloves"]
            },
            {
                id: 042,
                name: "Handschuhe Damen",
                pictures: {
                    "blau": "assets/png/clothing/gloves/gloves_f_1.png",
                    "rot":  "assets/png/clothing/gloves/gloves_f_2.png",
                    "gelb": "assets/png/clothing/gloves/gloves_f_3.png",
                    "grün": "assets/png/clothing/gloves/gloves_f_4.png",
                    "lila": "assets/png/clothing/gloves/gloves_f_5.png",
                    "grau": "assets/png/clothing/gloves/gloves_f_6.png",
                    "pink": "assets/png/clothing/gloves/gloves_f_7.png",
                    "dunkelrot": "assets/png/clothing/gloves/gloves_f_8.png"
                },
                category: "gloves",
                price: "9.99",
                size: ["Standard"],
                filter: ["female", "winter", "gloves"]
            },
            // coats
            {
                id: 050,
                name: "Mantel Herren",
                pictures: {
                    "blau": "assets/png/clothing/coats/coat_m_1.png",
                    "rot":  "assets/png/clothing/coats/coat_m_2.png",
                    "gelb": "assets/png/clothing/coats/coat_m_3.png",
                    "grün": "assets/png/clothing/coats/coat_m_4.png",
                    "lila": "assets/png/clothing/coats/coat_m_5.png",
                    "grau": "assets/png/clothing/coats/coat_m_6.png",
                    "pink": "assets/png/clothing/coats/coat_m_7.png",
                    "dunkelrot": "assets/png/clothing/coats/coat_m_8.png"
                },
                category: "top-piece",
                price: "39.99",
                size: ["Standard"],
                filter: ["male", "winter", "top-piece"]
            },
            {
                id: 051,
                name: "Mantel Damen",
                pictures: {
                    "blau": "assets/png/clothing/coats/coat_f_1.png",
                    "rot":  "assets/png/clothing/coats/coat_f_2.png",
                    "gelb": "assets/png/clothing/coats/coat_f_3.png",
                    "grün": "assets/png/clothing/coats/coat_f_4.png",
                    "lila": "assets/png/clothing/coats/coat_f_5.png",
                    "grau": "assets/png/clothing/coats/coat_f_6.png",
                    "pink": "assets/png/clothing/coats/coat_f_7.png",
                    "dunkelrot": "assets/png/clothing/coats/coat_f_8.png"
                },
                category: "top-piece",
                price: "39.99",
                size: ["Standard"],
                filter: ["female", "winter", "top-piece"]
            },
            // pants
            {
                id: 052,
                name: "Hosen Herren",
                pictures: {
                    "blau": "assets/png/clothing/pants/pants_m_1.png",
                    "rot":  "assets/png/clothing/pants/pants_m_2.png",
                    "gelb": "assets/png/clothing/pants/pants_m_3.png",
                    "grün": "assets/png/clothing/pants/pants_m_4.png",
                    "lila": "assets/png/clothing/pants/pants_m_5.png",
                    "grau": "assets/png/clothing/pants/pants_m_6.png",
                    "pink": "assets/png/clothing/pants/pants_m_7.png",
                    "dunkelrot": "assets/png/clothing/pants/pants_m_8.png"
                },
                category: "bottom-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["male", "winter", "summer", "fall", "spring", "bottom-piece"]
            },
            {
                id: 053,
                name: "Hosen Damen",
                pictures: {
                    "blau": "assets/png/clothing/pants/pants_f_1.png",
                    "rot":  "assets/png/clothing/pants/pants_f_2.png",
                    "gelb": "assets/png/clothing/pants/pants_f_3.png",
                    "grün": "assets/png/clothing/pants/pants_f_4.png",
                    "lila": "assets/png/clothing/pants/pants_f_5.png",
                    "grau": "assets/png/clothing/pants/pants_f_6.png",
                    "pink": "assets/png/clothing/pants/pants_f_7.png",
                    "dunkelrot": "assets/png/clothing/pants/pants_f_8.png"
                },
                category: "bottom-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["female", "winter", "summer", "fall", "spring", "bottom-piece"]
            },
            // shoes
            {
                id: 054,
                name: "Herrenschuhe",
                pictures: {
                    "blau": "assets/png/clothing/shoes/shoes_m_1.png",
                    "rot":  "assets/png/clothing/shoes/shoes_m_2.png",
                    "gelb": "assets/png/clothing/shoes/shoes_m_3.png",
                    "grün": "assets/png/clothing/shoes/shoes_m_4.png",
                    "lila": "assets/png/clothing/shoes/shoes_m_5.png",
                    "grau": "assets/png/clothing/shoes/shoes_m_6.png",
                    "pink": "assets/png/clothing/shoes/shoes_m_7.png",
                    "dunkelrot": "assets/png/clothing/shoes/shoes_m_8.png"
                },
                category: "shoes",
                price: "49.99",
                size: ["Standard"],
                filter: ["male", "winter", "summer", "fall", "spring", "shoes"]
            },
            {
                id: 055,
                name: "Damenschuhe",
                pictures: {
                    "blau": "assets/png/clothing/shoes/shoes_f_1.png",
                    "rot":  "assets/png/clothing/shoes/shoes_f_2.png",
                    "gelb": "assets/png/clothing/shoes/shoes_f_3.png",
                    "grün": "assets/png/clothing/shoes/shoes_f_4.png",
                    "lila": "assets/png/clothing/shoes/shoes_f_5.png",
                    "grau": "assets/png/clothing/shoes/shoes_f_6.png",
                    "pink": "assets/png/clothing/shoes/shoes_f_7.png",
                    "dunkelrot": "assets/png/clothing/shoes/shoes_f_8.png"
                },
                category: "shoes",
                price: "49.99",
                size: ["Standard"],
                filter: ["female", "winter", "summer", "fall", "spring", "shoes"]
            },
            // shorts
            {
                id: 056,
                name: "Herrenshorts",
                pictures: {
                    "blau": "assets/png/clothing/shorts/shorts_m_1.png",
                    "rot":  "assets/png/clothing/shorts/shorts_m_2.png",
                    "gelb": "assets/png/clothing/shorts/shorts_m_3.png",
                    "grün": "assets/png/clothing/shorts/shorts_m_4.png",
                    "lila": "assets/png/clothing/shorts/shorts_m_5.png",
                    "grau": "assets/png/clothing/shorts/shorts_m_6.png",
                    "pink": "assets/png/clothing/shorts/shorts_m_7.png",
                    "dunkelrot": "assets/png/clothing/shorts/shorts_m_8.png"
                },
                category: "bottom-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["male", "winter", "summer", "fall", "spring", "bottom-piece"]
            },
            {
                id: 057,
                name: "Damenshorts",
                pictures: {
                    "blau": "assets/png/clothing/shorts/shorts_f_1.png",
                    "rot":  "assets/png/clothing/shorts/shorts_f_2.png",
                    "gelb": "assets/png/clothing/shorts/shorts_f_3.png",
                    "grün": "assets/png/clothing/shorts/shorts_f_4.png",
                    "lila": "assets/png/clothing/shorts/shorts_f_5.png",
                    "grau": "assets/png/clothing/shorts/shorts_f_6.png",
                    "pink": "assets/png/clothing/shorts/shorts_f_7.png",
                    "dunkelrot": "assets/png/clothing/shorts/shorts_f_8.png"
                },
                category: "bottom-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["female", "winter", "summer", "fall", "spring", "bottom-piece"]
            },
            // t-shirt
            {
                id: 158,
                name: "T-Shirt Herren",
                pictures: {
                    "blau": "assets/png/clothing/t-shirt/t-shirt_m_1.png",
                    "rot":  "assets/png/clothing/t-shirt/t-shirt_m_2.png",
                    "gelb": "assets/png/clothing/t-shirt/t-shirt_m_3.png",
                    "grün": "assets/png/clothing/t-shirt/t-shirt_m_4.png",
                    "lila": "assets/png/clothing/t-shirt/t-shirt_m_5.png",
                    "grau": "assets/png/clothing/t-shirt/t-shirt_m_6.png",
                    "pink": "assets/png/clothing/t-shirt/t-shirt_m_7.png",
                    "dunkelrot": "assets/png/clothing/t-shirt/t-shirt_m_8.png"
                },
                category: "top-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["male", "winter", "summer", "fall", "spring", "top-piece"]
            },
            {
                id: 159,
                name: "T-Shirt Damen",
                pictures: {
                    "blau": "assets/png/clothing/t-shirt/t-shirt_f_1.png",
                    "rot":  "assets/png/clothing/t-shirt/t-shirt_f_2.png",
                    "gelb": "assets/png/clothing/t-shirt/t-shirt_f_3.png",
                    "grün": "assets/png/clothing/t-shirt/t-shirt_f_4.png",
                    "lila": "assets/png/clothing/t-shirt/t-shirt_f_5.png",
                    "grau": "assets/png/clothing/t-shirt/t-shirt_f_6.png",
                    "pink": "assets/png/clothing/t-shirt/t-shirt_f_7.png",
                    "dunkelrot": "assets/png/clothing/t-shirt/t-shirt_f_8.png"
                },
                category: "top-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["female", "winter", "summer", "fall", "spring", "top-piece"]
            },
            // sweater
            {
                id: 060,
                name: "Sweater Herren",
                pictures: {
                    "blau": "assets/png/clothing/sweater/sweater_m_1.png",
                    "rot":  "assets/png/clothing/sweater/sweater_m_2.png",
                    "gelb": "assets/png/clothing/sweater/sweater_m_3.png",
                    "grün": "assets/png/clothing/sweater/sweater_m_4.png",
                    "lila": "assets/png/clothing/sweater/sweater_m_5.png",
                    "grau": "assets/png/clothing/sweater/sweater_m_6.png",
                    "pink": "assets/png/clothing/sweater/sweater_m_7.png",
                    "dunkelrot": "assets/png/clothing/sweater/sweater_m_8.png"
                },
                category: "top-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["male", "winter", "summer", "fall", "spring", "top-piece"]
            },
            {
                id: 060,
                name: "Sweater Damen",
                pictures: {
                    "blau": "assets/png/clothing/sweater/sweater_f_1.png",
                    "rot":  "assets/png/clothing/sweater/sweater_f_2.png",
                    "gelb": "assets/png/clothing/sweater/sweater_f_3.png",
                    "grün": "assets/png/clothing/sweater/sweater_f_4.png",
                    "lila": "assets/png/clothing/sweater/sweater_f_5.png",
                    "grau": "assets/png/clothing/sweater/sweater_f_6.png",
                    "pink": "assets/png/clothing/sweater/sweater_f_7.png",
                    "dunkelrot": "assets/png/clothing/sweater/sweater_f_8.png"
                },
                category: "top-piece",
                price: "29.99",
                size: ["Standard"],
                filter: ["female", "winter", "summer", "fall", "spring", "top-piece"]
            },
        ]
}