const recipes = [
  {
    id: "1",
    name: "Fruit salad",
    ingredients: ["Banana", "Strawberries", "Cream"],
    category: "Dessert"
  },
  {
    id: "2",
    name: "Banana bread",
    ingredients: ["Banana", "Egg", "Flour", "Milk"],
    category: "Dessert"
  },
  {
    id: "3",
    name: "Cake",
    ingredients: ["Banana", "Egg", "Flour", "Milk", "Vanilla"],
    category: "Dessert"
  },
  {
    id: "4",
    name: "Steak",
    ingredients: ["Meat", "Butter"],
    category: "Main"
  },
];

var findIngredients = recipes.map((x) => x.ingredients);

console.log(findIngredients);

var isMain=function(recipes) {
    return recipes.category === "Main";
};

var main = recipes.filter(isMain);

var main = recipes.filter((recipes)=> {
    return recipes.category==="Main";
})

console.log(main);