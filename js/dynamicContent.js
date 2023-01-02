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
    // clear everything which might have been generated earlier
    document.getElementById("main-top").innerHTML = "";
    document.getElementById("main-middle").innerHTML = "";
    document.getElementById("main-bottom").innerHTML = "";
    // TODO generate filterbar at top
    IniatilizeAvatar();

    // add start, give default clothes and everytime after that custom clothes chosen by the user
    if (giveDefaultClothes) {
        addDefaultClothes();
    } else {
        addCustomClothes();
    }
}

function generateDetailView() {
    detailAvatar = document.getElementById("detail-avatar");

    // clear everything which might have been generated earlier
    detailAvatar.innerHTML = "";
    detailElement.setAttribute("onclick", "");

    // generate the clickable areas for each clothing type, e.g. hat, scarf etc.
    if(detailElement.classList.contains("top")) {
        hatElement = document.createElement("div");
        hatElement.classList.add("clothing-area");
        hatElement.classList.add("hat-area");
        hatElement.addEventListener("click", () => {addDetailClothingList("hat")});
        detailElement.appendChild(hatElement);

        earringElement = document.createElement("div");
        earringElement.classList.add("clothing-area");
        earringElement.classList.add("earring-area");
        earringElement.addEventListener("click", () => {addDetailClothingList("earring")});
        detailElement.appendChild(earringElement);

        scarfElement = document.createElement("div");
        scarfElement.classList.add("clothing-area");
        scarfElement.classList.add("scarf-area");
        scarfElement.addEventListener("click", () => {addDetailClothingList("scarf")});
        detailElement.appendChild(scarfElement);

        glassesElement = document.createElement("div");
        glassesElement.classList.add("clothing-area");
        glassesElement.classList.add("glasses-area");
        glassesElement.addEventListener("click", () => {addDetailClothingList("glasses")});
        detailElement.appendChild(glassesElement);
    }

    detailAvatar.appendChild(detailElement);
}

function generateShoppingView() {
    shoppingList = document.getElementById("shopping-list");

    // clear everything which might have been generated earlier
    shoppingList.innerHTML = "";

    // generate the shopping cart
    shoppingCart.forEach(function(item){

        // create image
        imageElement = document.createElement("img");
        imageElement.classList.add("shopping-image");
        imageElement.setAttribute("src", getPicture(item));

        // create name
        nameElement = document.createElement("p");
        nameElement.classList.add("shopping-name");
        nameElement.innerHTML = item.name;

        // create price tag
        priceElement = document.createElement("p");
        priceElement.classList.add("shopping-price");
        priceElement.innerHTML = item.price + "€";

        // maybe we want to display chosen size, color, etc as well


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
        listElement.appendChild(nameElement);
        listElement.appendChild(priceElement);
        listElement.appendChild(buttonElement);

        // add list element to shopping list
        shoppingList.appendChild(listElement);
    });

    UpdateTotalPrice();
}