import { IRecipe } from "./recipeViewModel";
export interface IUser {
  id: string;
  email: string;
  name: string;
  authentication: string; //AuthenticationAPI --
  favorites: []; //IRecipe[]
}