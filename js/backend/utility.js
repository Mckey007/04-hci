// helper functions which would clutter other files

function UpdateTotalPrice() {
    var total = 0.0;
    //itemElement = document.getElementById("shopping-list").children;
    for (var i = 0; i < shoppingCart.length; i++) {
        total  += Number(shoppingCart[i].cloth.item.price * shoppingCart[i].amount);
    }
    document.getElementById("totalPrice").innerHTML = total.toFixed(2) + "€";
}

function buyShoppingCart() {
        // remove every item from shopping cart and from html
        shoppingCart = [];
        shoppingCartElement = document.getElementById("shopping-cart");
        thankYouText = document.createElement("button");
        thankYouText.innerHTML = "Vielen Dank für ihren Einkauf!"
        thankYouText.classList.add("thank-you");
        shoppingCartElement.innerHTML = "";
        shoppingCartElement.appendChild(thankYouText);
        updateAmountItems();
}

function addToShoppingCart() {
    var activeItem = document.getElementsByClassName("activeItem")[0].item;
    var copiedItem = Object.assign({}, activeShoppingItem[activeItem.category]);

    // update amount if necessary
    var index = shoppingCartContains(copiedItem);
    if(index != -1) {
        shoppingCart[index].amount += 1;
        updateAmountItems();
        return;
    }

    shoppingCart.push({"cloth": copiedItem, "amount": 1});
    updateAmountItems();
}

function changeColor() {
    var activeItem = document.getElementsByClassName("activeItem")[0].item;
    var colorSelect = document.getElementById("color-select");
    activeShoppingItem[activeItem.category].color = colorSelect.value;
    redrawDetailList(activeItem.category)
}



// sets up the detail view, depending on what part of the avatar was clicked (top, middle, bottom)
function setDetail(event) {
    detailElement = null;
    elements = event.getElementsByClassName('clothing-area');
    for(var i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
    detailElement = event.cloneNode(true);
    setPage('detail-view');
}

function createClickableArea(category) {
    var element = document.createElement("div");
    element.classList.add("clothing-area");
    element.classList.add(category + "-area");
    element.addEventListener("click", () => {addDetailClothingList(category)});
    return element;
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

function shoppingCartContains(entry) {
    for(var i = 0; i < shoppingCart.length; i++) {
        if(shallowEqual(shoppingCart[i].cloth, entry)) return i;
    }
    return -1;
}

function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
}
