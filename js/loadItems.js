//@return all Shopping Items as Array
function getItems() {
    return [
            {
                id: 001,
                name: "Wintermütze Zipfel",
                pictures: {
                    "blau": "assets/png/clothing/hats/Muetze_1.png",
                    "rot": "assets/png/clothing/hats/Muetze_2.png"
                },
                category: "hat",
                price: "19.99",
                size: ["Standard"],
                filter: ["male", "winter", "hat"]
            },
            {
                id: 040,
                name: "Ohrring",
                pictures: {
                    "default": "assets/png/clothing/earrings/Ohrring_11.png",
                },
                category: "earring",
                price: "14.99",
                size: ["Standard"],
                filter: ["male", "winter", "earring"]
            },
            {
                id: 060,
                name: "Brille",
                pictures: {
                    "default": "assets/png/clothing/glasses/Brille_1.png",
                },
                category: "glasses",
                price: "25.99",
                size: ["Standard"],
                filter: ["male", "winter", "glasses"]
            },
            {
                id: 080,
                name: "Schal",
                pictures: {
                    "default": "assets/png/clothing/scarves/Schal_1.png",
                },
                category: "scarf",
                price: "9.99",
                size: ["Standard"],
                filter: ["male", "winter", "scarf"]
            },
        ]
}