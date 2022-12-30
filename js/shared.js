//Put here only const enums and class templates

//All possible paths
const Navigation = {
    MAINVIEW: "main-view",
    DETAILVIEW: "detail-view",
    SELECTGENDER: "select-gender",
    SELECTSEASON: "select-season",
    SHOPPINGCART: "shopping-cart"
};

//All possible genders
const Gender = {
    MALE: "male",
    FEMALE: "female"
}

//All possible seasons
const Season = {
    SPRING: "spring",
    SUMMER: "summer",
    FALL: "fall",
    WINTER: "winter"
}

//Template for shopping items
class shoppingItem {
    id = 0;
    name = "";
    picture = "";
    price = 0;
    size = [""];
    color= [""];
    filter = [""]; // categories which map to this item, e.g. ["male", "winter","hat"]
}
