// item logic

function getShoppingItemById(id) {
    var items = shoppingItems;
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) return items[i];
    }
    return null;
}

// filter is an array of strings, e.g. ["male", "winter"]
// returns every item which has AT LEAST the filters
function filterShoppingItems(filter) {
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

function setActiveItem(item) {
    // update the active shopping item on the avatar
    activeShoppingItem[item.category] = item;
}