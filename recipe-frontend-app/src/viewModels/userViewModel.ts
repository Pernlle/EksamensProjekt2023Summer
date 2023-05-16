export interface IUser {
  id: string;
  email: string;
  name: string;
  authentication: string; //AuthenticationAPI --
  favorites: string[]; //IRecipe[]
}