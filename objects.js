// create an object fruits with at least 5 fruits that have the name of the fruit as the key and the value being the color of the fruit
const fruits = {
    apple: "red",
    banana: "yellow",
    kiwi: "green",
    blueberries: "blue",
    coconut: "white"

};

// print out each value in that object manually
const {apple, banana, kiwi, blueberries, coconut} = fruits; 
console.log(apple, banana, kiwi, blueberries, coconut);

//then print out each value using a for loop
let fruits = ["apple", "banana", "kiwi", "blueberries", "coconut"];

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//reassign one of the keys in the object to have a different value
fruits.apple = "green"
// delete one of the properties in the object
delete fruits.banana; 
// write a function that takes in an object and key and returns that value at that key in the object
function getVal (obj, key) {
return obj[key]
}
console.log(getVal(fruits, "kiwi"))