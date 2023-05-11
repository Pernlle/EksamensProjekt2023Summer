import { IRecipeRepository } from "./domain-layer";

// Define the interface for the recipe service
export interface IRecipeService {
  getAllRecipes: () => Promise<{ id: string; name: string }[]>;
  getRecipeById: (id: string) => Promise<{ id: string; name: string } | null>;
}

// Create the recipe service
export function createRecipeService(repository: IRecipeRepository): IRecipeService {
    // Return an object
  return {
    getAllRecipes: async () => {
      const recipes = await repository.getAllRecipes();
      return recipes.map((recipe) => ({ id: recipe.id, name: recipe.name }));
    },
    getRecipeById: async (id: string) => {
      const recipe = await repository.getRecipeById(id);
      if (!recipe) return null;
      return { id: recipe.id, name: recipe.name };
    },
  };
}
