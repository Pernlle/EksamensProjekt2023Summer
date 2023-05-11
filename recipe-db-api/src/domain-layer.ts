// Define the interface for a recipe
export interface IRecipe {
    id: string;
    name: string;
    ingredients: string[];
  }
  
  // Create the recipe repository
  export const recipes: IRecipe[] = [
    {
      id: "1",
      name: "Fruit salad",
      ingredients: ["Banana", "Strawberries", "Cream"],
    },
    {
      id: "2",
      name: "Banana bread",
      ingredients: ["Banana", "Egg", "Flour", "Milk"],
    },
    {
      id: "3",
      name: "Cake",
      ingredients: ["Banana", "Egg", "Flour", "Milk", "Vanilla"],
    },
    {
      id: "4",
      name: "Chocolate milk",
      ingredients: ["Chocolate", "Milk"],
    },
  ];
  
  // Define the interface for the recipe repository
  export interface IRecipeRepository {
    getAllRecipes: () => Promise<IRecipe[]>;
    getRecipeById: (id: string) => Promise<IRecipe | null>;
  }
  
  export function createRecipeRepository(): IRecipeRepository {
    return {
      getAllRecipes: async () => {
        return recipes;
      },
      getRecipeById: async (id: string) => {
        return recipes.find((recipe) => recipe.id === id) ?? null;
      },
    };
  }
  