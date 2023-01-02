// helper functions which would clutter other files

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

// sets up the detail view, depending on what part of the avatar was clicked (top, middle, bottom)
function setDetail(event) {
    elements = event.getElementsByClassName('clothing-area');
    for(var i = 0; i < elements.length; i++) {
        console.log(elements[i]);
        elements[i].remove();
    }
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

function setActiveItem(item) {
    // update the active shopping item on the avatar
    activeShoppingItem[item.category] = item;
}

