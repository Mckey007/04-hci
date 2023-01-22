//Disable all pages and enable the page in @param path
//Only use values from Navigation for path
function setPage(path) {
    //hide all elements
    document.getElementById("detail-view").classList.remove("selected");
    document.getElementById("detail-view").classList.add("hidden");

    document.getElementById("main-view").classList.remove("selected");
    document.getElementById("main-view").classList.add("hidden");

    document.getElementById("select-gender").classList.remove("selected");
    document.getElementById("select-gender").classList.add("hidden");

    document.getElementById("select-season").classList.remove("selected");
    document.getElementById("select-season").classList.add("hidden");

    document.getElementById("shopping-cart").classList.remove("selected");
    document.getElementById("shopping-cart").classList.add("hidden");

    //select page
    document.getElementById(path).classList.add("selected");
    document.getElementById(path).classList.remove("hidden");


    // generate dynamic page content
    if (path == "select-gender") generateGenderView();
    if (path == "select-season") generateSeasonView();
    if (path == "main-view") generateMainView();
    if (path == "detail-view") generateDetailView();
    if (path == "shopping-cart") generateShoppingView();

    updateNavigation();
}

//Set Gender and change to Season-page
function setGender(gender) {
    settings.gender = gender;
    giveDefaultClothes = true;
    setPage("select-season");
}

//Set Season and change to Main-page
function setSeason(season) {
    settings.season = season;
    giveDefaultClothes = true;
    setPage("main-view");
}

function generateGenderView() {
    settings.gender = "";
    settings.season = "";
}

function generateSeasonView() {
    settings.season = "";
}

function generateMainView() {
    // clear everything which might have been generated earlier
    document.getElementById("main-top").innerHTML = "";
    document.getElementById("main-middle").innerHTML = "";
    document.getElementById("main-bottom").innerHTML = "";
    detailElement = null;

    // TODO generate filterbar at top
    IniatilizeAvatar();
    
    // add start, give default clothes and everytime after that custom clothes chosen by the user
    if (giveDefaultClothes) {
        addDefaultClothes();
    } else {
        addCustomClothes();
    }
}

// shows how many items are in the shopping cart next to the button/icon of the shopping cart
function updateAmountItems() {
    var number = 0;
    for(var i = 0; i < shoppingCart.length; i++) {
        number += shoppingCart[i].amount;
    }
    document.getElementById("cart-amount").innerHTML = number;
    document.getElementById("totalAmount").innerHTML = number + " Artikel";
}

function generateDetailView() {
    detailAvatar = document.getElementById("detail-avatar");

    // clear everything which might have been generated earlier
    detailAvatar.innerHTML = "";
    detailElement.setAttribute("onclick", "");
    removeDetailClothingList("");

    // generate the clickable areas for each clothing type, e.g. hat, scarf etc.
    if(detailElement.classList.contains("top")) {
        detailElement.appendChild(createClickableArea("hat"));
        detailElement.appendChild(createClickableArea("earring"));
        detailElement.appendChild(createClickableArea("scarf"));
        detailElement.appendChild(createClickableArea("glasses"));
    } else if (detailElement.classList.contains("middle")) {
        detailElement.appendChild(createClickableArea("top-piece"));
        detailElement.appendChild(createClickableArea("gloves"));
    } else if (detailElement.classList.contains("bottom")) {
        detailElement.appendChild(createClickableArea("bottom-piece"));
        detailElement.appendChild(createClickableArea("shoes"));
    }

    detailAvatar.appendChild(detailElement);
}

function generateShoppingView() {
    shoppingList = document.getElementById("shopping-list");
    // clear everything which might have been generated earlier
    shoppingList.innerHTML = "";
    resetNavigation(document.getElementById("navigation"));
    
    // generate the shopping cart
    shoppingCart.forEach(function(entry){

        // create image
        imageElement = document.createElement("img");
        imageElement.classList.add("shopping-image");
        imageElement.setAttribute("src", getPicture(entry.cloth.item, entry.color).replace("clothing", "unedited_pngs"));

        // create name
        nameElement = document.createElement("p");
        nameElement.classList.add("shopping-name");
        nameElement.innerHTML = entry.cloth.item.name;

        // create amount
        countElement = document.createElement("p");
        countElement.classList.add("shopping-count");
        countElement.innerHTML = entry.amount + "x";

        // create price tag
        priceElement = document.createElement("p");
        priceElement.classList.add("shopping-price");
        priceElement.innerHTML = (entry.cloth.item.price * entry.amount).toFixed(2) + "€";

        // maybe we want to display chosen size, color, etc as well


        // add button to remove element from shopping cart, for now the button is text
        // but we could add an image with a garbage bin or an X or something
        buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Entfernen";
        buttonElement.addEventListener("click", (event) => {
            if(entry.amount > 1) {
                entry.amount -= 1;
            } else {
                // remove item from shopping cart and from html
                var index = shoppingCart.indexOf(event.srcElement.parentNode.item);
                if (index > -1) { 
                    shoppingCart.splice(index, 1);
                }
                event.srcElement.parentNode.remove();
            }
            updateAmountItems();
            generateShoppingView();
            updateNavigation();
        });

        // create list element, which combines image, price, etc. into one
        listElement = document.createElement("div");
        listElement.classList.add("shopping-item");
        listElement.item = entry;
        listElement.appendChild(imageElement);
        listElement.appendChild(nameElement);
        listElement.appendChild(countElement);
        listElement.appendChild(priceElement);
        listElement.appendChild(buttonElement);

        // add list element to shopping list
        shoppingList.appendChild(listElement);
    });

    var kaufButton = document.getElementById("kauf-button");
    if(shoppingCart.length == 0) {
        kaufButton.classList.add("hidden");
    } else {
        kaufButton.classList.remove("hidden");
    }

    UpdateTotalPrice();
}

