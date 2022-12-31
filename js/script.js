//All function-calls and initial var-deklarations
var settings = {gender: "", season:""};
var shoppingCart = [];
var shoppingItems = [];

var debug = true; // can be used for if-checks to display debug information. could be set to false when presenting
var detailElement; // used for detailview

//Load all shopping items
shoppingItems = getItems();
