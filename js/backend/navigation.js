
function updateNavigation() {

    var navigation = document.getElementById("navigation");
    resetNavigation(navigation);
    //addSlash(navigation);

    // Gender
    if(settings.gender == "male") addPageLink(navigation, "Herren", "select-gender");
    else if(settings.gender == "female") addPageLink(navigation, "Damen", "select-gender");

    // Season
    if(settings.season != "") addSlash(navigation);
    if(settings.season == "spring") addPageLink(navigation, "Frühling", "select-season");
    else if(settings.season == "summer") addPageLink(navigation, "Sommer", "select-season");
    else if(settings.season == "fall") addPageLink(navigation, "Herbst", "select-season");
    else if(settings.season == "winter") addPageLink(navigation, "Winter", "select-season");

    // Main
    if(detailElement) {
        addSlash(navigation);
        addPageLink(navigation, "Hauptansicht", "main-view");
    }
}

function resetNavigation(navigation) {
    navigation.innerHTML = "";
}

function addSlash(navigation) {
    var element = document.createElement("p");
    element.innerHTML = "/";
    navigation.appendChild(element);
}

function addPageLink(navigation, pageName, page) {
    var element = document.createElement("button");
    element.addEventListener("click", () => { setPage(page) });
    element.classList.add("navigation-element");
    element.innerHTML = pageName;
    navigation.appendChild(element);
}

function addDetailLink(navigation, pageName, category) {
    var element = document.createElement("button");
    element.addEventListener("click", () => { removeDetailClothingList(category) });
    element.classList.add("navigation-element");
    element.innerHTML = pageName;
    navigation.appendChild(element);
}

function addDetailSlotToNavigation(category) {
    var navigation = document.getElementById("navigation");
    addSlash(navigation);
    if(categorySlot[category] == "top") addDetailLink(navigation, "Kopfbereich", category);
    if(categorySlot[category] == "middle") addDetailLink(navigation, "Oberkörper", category);
    if(categorySlot[category] == "bottom") addDetailLink(navigation, "Beine", category);
}