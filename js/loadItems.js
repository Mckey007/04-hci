//@return all Shopping Items as Array
function getItems() {
    return [
            {
                id: 001,
                name: "Hose1",
                picture: "assets/png/Hose01.png",
                price: "99.99",
                size: ["S", "M", "L"],
                color: ["green", "blue"],
                filter: ["male", "winter"]
            },
            {
                id: 002,
                name: "Hose2",
                picture: "assets/png/Hose01.png",
                price: "90",
                size: ["S", "M", "L"],
                color: ["green", "blue"],
                filter: ["male", "summer"]
            }
        ]
}

function getShoppingItemById(id) {
    var items = getItems();
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) return items[i];
    }
    return null;
}

// filter is an array of strings, e.g. ["male", "winter"]
// returns every item which has AT LEAST the filters
function filterShoppingItem(filter) {
    var items = getItems();
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