/*
const animals = require("./animals.json");

function amountOfFavoriteAnimal(){
    return animals.favorites.length;
}
*/

const { favorites, secondKey } = require("./animals.json")

function amountOfFavoriteAnimal(){
    return favorites.length;
}

function returnMyName(){
    return secondKey;
}

module.exports = {
    calculating: amountOfFavoriteAnimal,
    myName: returnMyName
};