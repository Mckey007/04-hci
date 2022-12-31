// helper functions which would clutter other files

function getShoppingItemById(id) {
    var items = shoppingItems;
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) return items[i];
    }
    return null;
}

// filter is an array of strings, e.g. ["male", "winter"]
// returns every item which has AT LEAST the filters
function filterShoppingItem(filter) {
    var items = shoppingItems;
    var filteredItems = [];

    for (var i = 0; i < items.length; i++) {

        var isFiltered = true;
        for(var j = 0; j < filter.length; j++) {
            if(!items[i].filter.includes(filter[j])) {
                isFiltered = false;
                break;
            }
        }
        if(isFiltered) filteredItems.push(items[i]);
    }

    return filteredItems;
}

/**
 * Adds a shopping item to the avatar.
 * @param {string} slot - Either top, middle or bottom.
 * @param {string} itemID - ID of the shopping item.
 * @param {string} zIndex - An item with a higher z-index will be on top of another item with a lower one.
 */
function addClothingToAvatar(slot, itemID, zIndex = "auto") {
    // create image
    imageElement = document.createElement("img");
    item = getShoppingItemById(itemID);
    imageElement.setAttribute("src", getPicture(item));
    imageElement.classList.add("clothing");
    imageElement.classList.add(item.category);
    imageElement.style.zIndex = zIndex;

    // add image to slot
    slotElement = document.getElementById("main-" + slot);
    slotElement.appendChild(imageElement);
}

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
 * @param {string} slot - Either top, middle or bottom.
 * @param {string} itemName - The name of the item. Might not be unique.
 * @param {string} zIndex - An item with a higher z-index will be on top of another item with a lower one.
 */
function addClothingToAvatarByName(slot, itemName, zIndex = "auto") {
    var items = shoppingItems;
    for (var i = 0; i < items.length; i++) {
        if (items[i].name == itemName) return addClothingToAvatar(slot, items[i].id, zIndex);
    }
}

function UpdateTotalPrice() {
    var total = 0.0;
    var itemElement = document.getElementById("shopping-list").children;
    for (var i = 0; i < itemElement.length; i++) {
        total  += Number(itemElement[i].item.price);
    }
    document.getElementById("totalPrice").innerHTML = total + "€";
}


function buyShoppingCart() {
        // remove every item from shopping cart and from html
        shoppingCart = [];
        shoppingCartElement = document.getElementById("shopping-cart");
        thankYouText = document.createElement("p");
        thankYouText.innerHTML = "Vielen Dank für ihren Einkauf!"
        shoppingCartElement.innerHTML = "";
        shoppingCartElement.appendChild(thankYouText);
}


function setDetail(event) {
    detailElement = event.cloneNode(true);
    setPage('detail-view');
}

// given a shopping item, returns the path to the image that maps to the color
function getPicture(item, key = "") {
    if(key == "" || !(key in item.pictures)) {
        // if wrong or no key specified, return the picture at index 0
        return item.pictures[Object.keys(item.pictures)[0]];
    } else {
        return item.pictures[key];
    }
}

// called when one type of clothing is selected in the detail view
function generateDetailClothingList(category) {
    
}


function updatePicture(category, item, key = "") {
    slots = document.getElementsByClassName(category);
    if (slots == null) {
        console.log("Category " + category + " in updatePicture() nicht gefunden");
        return;
    }

    for(i = 0; i < slots.length; i++) {
        slots[i].setAttribute("src", getPicture(item, key));
    }
    
    
}