//All function-calls and initial var-deklarations
var settings = {gender: "", season:""};
var shoppingCart = [];
var shoppingItems = [];

var giveDefaultClothes = true; // if the avatar should be given default clothes, or the ones chosen by the user

var detailElement; // is either the top, middle or bottom of the avatar

// keep track of the shopping item, which is currently on the avatar for each category
var activeShoppingItem = {
    "hat": {item: null, color: ""}, 
    "scarf": {item: null, color: ""},
    "glasses": {item: null, color: ""},
    "earring": {item: null, color: ""},
    "top-piece": {item: null, color: ""}, // includes coats, t-shirts, sweaters
    "gloves": {item: null, color: ""},
    "bottom-piece": {item: null, color: ""},
    "shoes": {item: null, color: ""},
};

// map each category to the corresponding slot, e.g. "hat" -> "top" or "jacket" -> "middle"
var categorySlot = {
    "hat": "top",
    "scarf": "top",
    "glasses": "top",
    "earring": "top",
    "top-piece": "middle", // includes coats, t-shirts, sweaters
    "gloves": "middle",
    "bottom-piece": "bottom", // includes pants, shorts
    "shoes": "bottom"
}

//Load all shopping items
shoppingItems = getItems();
