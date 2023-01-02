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
 * @param {string} category - E.g. hat, glasses, scarf etc
 * @param {string} itemName - The name of the item. Might not be unique.
 * @param {string} zIndex - An item with a higher z-index will be on top of another item with a lower one.
 */
function addClothingToAvatarByName(itemName, zIndex = "auto") {
    var items = shoppingItems;
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == itemName) return addClothingToAvatar(items[i].id, zIndex);
    }
}

/**
 * Adds a shopping item to the avatar.
 * @param {string} category - E.g. hat, glasses, scarf etc
 * @param {string} itemID - ID of the shopping item.
 * @param {string} zIndex - An item with a higher z-index will be on top of another item with a lower one.
 */
function addClothingToAvatar(itemID, zIndex = "auto") {
    // create image
    imageElement = document.createElement("img");
    item = getShoppingItemById(itemID);
    imageElement.setAttribute("src", getPicture(item));
    imageElement.classList.add("clothing");
    imageElement.classList.add(item.category);
    imageElement.style.zIndex = zIndex;

    // add image to slot
    slotElement = document.getElementById("main-" + categorySlot[item.category]);
    slotElement.appendChild(imageElement);

    setActiveItem(item);
}

function addDefaultClothes() {
    if(settings.gender == "male" && settings.season == "winter") {
        addClothingToAvatarByName("Wintermütze mit Streifen, Zipfel");
        addClothingToAvatarByName("Schal");
        addClothingToAvatarByName("Brille");
        addClothingToAvatarByName("Ohrring");
    } else if(settings.gender == "female" && settings.season == "winter") {
        addClothingToAvatarByName("Wintermütze mit Streifen, Zipfel");
        addClothingToAvatarByName("Schal");
        addClothingToAvatarByName("Brille");
        addClothingToAvatarByName("Ohrring");
    }
    giveDefaultClothes = false;
}

function addCustomClothes() {
    for (var category in activeShoppingItem) {
        if (activeShoppingItem.hasOwnProperty(category)) {
            addClothingToAvatar(activeShoppingItem[category].id);
        }
    }
}