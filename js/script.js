//All function-calls and initial var-deklarations
var settings = {gender: "", season:""};
var shoppingCart = [];
var shoppingItems = [];

var giveDefaultClothes = true; // if the avatar should be given default clothes, or the ones chosen by the user

var detailElement; // is either the top, middle or bottom of the avatar

// keep track of the shopping item, which is currently on the avatar for each category
var activeShoppingItem = {
    "hat": null,
    "scarf": null,
    "glasses": null,
    "earring": null,
};

// map each category to the corresponding slot, e.g. "hat" -> "top" or "jacket" -> "middle"
var categorySlot = {
    "hat": "top",
    "scarf": "top",
    "glasses": "top",
    "earring": "top",
}

//Load all shopping items
shoppingItems = getItems();
