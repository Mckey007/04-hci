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
    if (path == "main-view") generateMainView();
    if (path == "detail-view") generateDetailView();
    if (path == "shopping-cart") generateShoppingView();
}

//Set Gender and change to Season-page
function setGender(gender) {
    settings.gender = gender;
    setPage("select-season");
}

//Set Season and change to Main-page
function setSeason(season) {
    settings.season = season;
    setPage("main-view");
}

function generateMainView() {

}

function generateDetailView() {

}

function generateShoppingView() {
    shoppingList = document.getElementById("shopping-list");
    shoppingOverview = document.getElementById("shopping-overview");

    // clear everything which might have been generated earlier
    shoppingList.innerHTML = "";
    //shoppingOverview.innerHTML = "";

    if (debug) shoppingCart = getItems(); // add every existing item to the cart to debug

    // generate the shopping cart
    shoppingCart.forEach(function(item){

        // create image
        imageElement = document.createElement("img");
        imageElement.classList.add("shopping-image");
        imageElement.setAttribute("src", item.picture);

        // create price tag
        priceElement = document.createElement("p");
        priceElement.classList.add("shopping-price");
        priceElement.innerHTML = item.price + "€";

        // maybe we want to display chosen size, color or name as well

        // add button to remove element from shopping cart, for now the button is text
        // but we could add an image with a garbage bin or an X or something
        buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Entfernen";
        buttonElement.addEventListener("click", (event) => {
            // remove item from shopping cart and from html
            shoppingCart = shoppingCart.filter(item => item !== event.srcElement.parentNode.item);
            event.srcElement.parentNode.remove();
            UpdateTotalPrice();
        });

        // create list element, which combines image, price, etc. into one
        listElement = document.createElement("div");
        listElement.classList.add("shopping-item");
        listElement.item = item;
        listElement.appendChild(imageElement);
        listElement.appendChild(priceElement);
        listElement.appendChild(buttonElement);

        // add list element to shopping list
        shoppingList.appendChild(listElement);
    });

    // generate the overview

    UpdateTotalPrice();
    
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