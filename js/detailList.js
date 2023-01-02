// called when one type of clothing is selected in the detail view
function addDetailClothingList(category) {

    removeDetailClothingList(category); // clean reset

    // change from "normal" detailview to the one where the elements are listed on the right
    document.getElementById("detail-avatar").classList.add("left");
    document.getElementById("back-button").setAttribute("onclick", "removeDetailClothingList('" + category + "')");
    detailList = document.getElementById("detail-list");
    detailList.classList.remove("hidden");

    // find every valid item to display in the list on the right, add it to html
    var activeItem;
    validItems = filterShoppingItems([category]);
    for(i = 0; i < validItems.length; i++) {
        element = document.createElement("img");
        element.setAttribute("src", getPicture(validItems[i]).replace("clothing", "unedited_pngs"));
        
        listElement = document.createElement("div");
        listElement.item = validItems[i];
        listElement.addEventListener("click", (event) => { updateDetailList(event) });
        listElement.classList.add("list-element");
        
        // find the item the avatar is currently wearing
        if (validItems[i] == activeShoppingItem[category]) {
            activeItem = validItems[i];
            listElement.classList.add("active");
        }
        listElement.appendChild(element);
        detailList.appendChild(listElement);
    }
    // add bar for the active item which allows for swapping color and buying
}

function updateDetailList(event) {
    if(event.srcElement.classList.contains("list-element")) {
        newItem = event.srcElement.item;
    } else {
        newItem = event.srcElement.parentElement.item;
    }
    

    setActiveItem(newItem);

    removeDetailClothingList(newItem.category);
    setPage("main-view");
    setDetail(document.getElementById("main-" + categorySlot[newItem.category]));
    setPage("detail-view");

    addDetailClothingList(newItem.category);
}

function removeDetailClothingList(category) {
    document.getElementById("detail-avatar").classList.remove("left");
    document.getElementById("back-button").setAttribute("onclick", "setPage('main-view')");
    detailList = document.getElementById("detail-list")
    detailList.classList.add("hidden");
    detailList.innerHTML = "";
}