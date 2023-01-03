// called when one type of clothing is selected in the detail view
function addDetailClothingList(category) {

    removeDetailClothingList(category); // clean reset

    // change from "normal" detailview to the one where the elements are listed on the right
    document.getElementById("detail-avatar").classList.add("left");
    document.getElementById("back-button").setAttribute("onclick", "removeDetailClothingList('" + category + "')");
    detailList = document.getElementById("detail-list");

    document.getElementById("context-buttons").classList.remove("hidden");
    detailList.classList.remove("hidden");

    // find every valid item to display in the list on the right, add it to html
    var activeItem;
    validItems = filterShoppingItems([category, settings.gender, settings.season]);
    for(i = 0; i < validItems.length; i++) {
        element = document.createElement("img");
        element.setAttribute("src", getPicture(validItems[i]).replace("clothing", "unedited_pngs"));
        
        listElement = document.createElement("div");
        listElement.item = validItems[i];
        listElement.addEventListener("click", (event) => { updateDetailList(event) });
        listElement.classList.add("list-element");
        
        // find the item the avatar is currently wearing
        if (validItems[i] == activeShoppingItem[category].item) {
            activeItem = validItems[i];
            listElement.classList.add("activeItem");
            element.setAttribute("src", getPicture(activeItem, activeShoppingItem[category].color).replace("clothing", "unedited_pngs"));

            // add color options of the active item to the dropdown
            var colorSelect = document.getElementById("color-select");
            for (var color in activeItem.pictures) {
                var option = document.createElement("option");
                option.setAttribute("value", color);
                if(color == activeShoppingItem[category].color) {
                    option.selected = "selected";
                }
                option.innerHTML = color;
                colorSelect.appendChild(option);
            }

        }
        listElement.appendChild(element);
        detailList.appendChild(listElement);
    }
    // add bar for the active item which allows for swapping color and buying
}

function updateDetailList(event) {
    // do nothing if active item was clicked
    if(event.srcElement.classList.contains("activeItem") || event.srcElement.parentElement.classList.contains("activeItem")) {
        return;
    }

    if(event.srcElement.classList.contains("list-element")) {
        newItem = event.srcElement.item;
    } else {
        newItem = event.srcElement.parentElement.item;
    }
    

    setActiveItem(newItem);

    redrawDetailList(newItem.category);
    
}

function redrawDetailList(category) {
    removeDetailClothingList(category);
    setPage("main-view");
    setDetail(document.getElementById("main-" + categorySlot[category]));
    setPage("detail-view");

    addDetailClothingList(category);
}

function removeDetailClothingList(category) {
    document.getElementById("detail-avatar").classList.remove("left");
    document.getElementById("back-button").setAttribute("onclick", "setPage('main-view')");
    document.getElementById("color-select").innerHTML = "";
    detailList = document.getElementById("detail-list");
    detailList.classList.add("hidden");
    document.getElementById("context-buttons").classList.add("hidden");
    detailList.innerHTML = "";
}