// functions for the avatar

/**
 * Adds the "naked" avatar without any clothes.
 */
function IniatilizeAvatar() {
    // create images
    topElement = document.createElement("img");
    topElement.classList.add("base");
    middleElement = document.createElement("img");
    middleElement.classList.add("base");
    bottomElement = document.createElement("img");
    bottomElement.classList.add("base");

    if(settings.gender == "male") {
        topElement.setAttribute("src", "assets/png/avatar_base/Mann_Top.png");
        middleElement.setAttribute("src", "assets/png/avatar_base/Mann_Middle.png");
        bottomElement.setAttribute("src", "assets/png/avatar_base/Mann_Bottom.png");
    } else {
        topElement.setAttribute("src", "assets/png/avatar_base/Frau_Top.png");
        middleElement.setAttribute("src", "assets/png/avatar_base/Frau_Middle.png");
        bottomElement.setAttribute("src", "assets/png/avatar_base/Frau_Bottom.png");
    }


    document.getElementById("main-top").appendChild(topElement);
    document.getElementById("main-middle").appendChild(middleElement);
    document.getElementById("main-bottom").appendChild(bottomElement);
}

/**
 * Adds a shopping item to the avatar.
 * @param {string} itemName - The name of the item. Might not be unique.
 * @param {string} category - E.g. hat, glasses, scarf etc
 * @param {string} zIndex - An item with a higher z-index will be on top of another item with a lower one.
 */
function addClothingToAvatarByName(itemName, color = "", zIndex = "auto") {
    var items = shoppingItems;
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == itemName) return addClothingToAvatar(items[i].id, color, zIndex);
    }
}

/**
 * Adds a shopping item to the avatar.
 * @param {string} itemID - ID of the shopping item.
 * @param {string} color - specify color. if none is given, the default one will be chosen
 * @param {string} zIndex - An item with a higher z-index will be on top of another item with a lower one.
 */
function addClothingToAvatar(itemID, color = "", zIndex = "auto") {
    // create image
    imageElement = document.createElement("img");
    item = getShoppingItemById(itemID);
    imageElement.setAttribute("src", getPicture(item, color));
    imageElement.classList.add("clothing");
    imageElement.classList.add(item.category);
    imageElement.style.zIndex = zIndex;

    // add image to slot
    slotElement = document.getElementById("main-" + categorySlot[item.category]);
    slotElement.appendChild(imageElement);

    setActiveItem(item, color);
}

function addDefaultClothes() {
    resetActiveClothes();

    if(settings.gender == "male" && settings.season == "winter") {
        addClothingToAvatarByName("Wintermütze mit Streifen, Zipfel", "blau");
        addClothingToAvatarByName("Schal");
        addClothingToAvatarByName("Brille #1");
        addClothingToAvatarByName("Ohrring #11");
        addClothingToAvatarByName("Handschuhe Herren");
        addClothingToAvatarByName("Herrenschuhe");
    } else if(settings.gender == "female" && settings.season == "winter") {
        addClothingToAvatarByName("Wintermütze mit Streifen, Zipfel", "blau");
        addClothingToAvatarByName("Schal");
        addClothingToAvatarByName("Brille #1");
        addClothingToAvatarByName("Ohrring #11");
        addClothingToAvatarByName("Handschuhe Damen");
        addClothingToAvatarByName("Damenschuhe");
    }
    giveDefaultClothes = false;
}

function resetActiveClothes() {
    for (var category in activeShoppingItem) {
        if (activeShoppingItem.hasOwnProperty(category) && activeShoppingItem[category].item != null ) {
            activeShoppingItem[category].item = null;
            activeShoppingItem[category].color= null;
        }
    }
}

function addCustomClothes() {
    for (var category in activeShoppingItem) {
        if (activeShoppingItem.hasOwnProperty(category) && activeShoppingItem[category].item != null ) {
            addClothingToAvatar(activeShoppingItem[category].item.id, activeShoppingItem[category].color);
        }
    }
}