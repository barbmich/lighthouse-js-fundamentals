const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("List of ingredients output through while loop:")
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};
console.log("\nList of ingredients output through for loop:")
// Write a for loop that prints out the contents of ingredients:
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nList of ingredients outputted backwards through for loop:");
for (let k = ingredients.length-1; k >= 0; k--) {
  console.log(ingredients[k]);
}