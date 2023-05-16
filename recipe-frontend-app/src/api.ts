import { IRecipe } from "./viewModels/recipeViewModel";
import { IUser } from "./viewModels/userViewModel";

export async function login(
    email: string,
    password: string
  ): Promise<{ token: string } | void> {
    try {
      const response = await fetch("http://localhost:3002/user/favorites", {
        method: "POST",
        body: JSON.stringify({ email, password }), //objectttt -real nice
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }

export async function addFavoriteRecipe(
    recipeId: string,
    userId: string
  ): Promise<{ message: string }> {
    try {
      const response = await fetch("http://localhost:3002/user/favorites", {
        method: "PUT",
        body: JSON.stringify({ recipeId, userId }), //objectttt -real nice
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return { message: error as string };
    }
  }
  
  export async function getRecipes(): Promise<IRecipe[]> {
    try {
      const response = await fetch("http://localhost:3001/recipes");
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  export async function getUsers(): Promise<IUser[]> {
    try {
      const response = await fetch("http://localhost:3002/users");
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return [];
    }
  }