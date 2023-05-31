import React, { useEffect, useState } from "react";
import "./App.css";
import { IRecipe } from "./viewModels/recipeViewModel";
import { IUser } from "./viewModels/userViewModel";
import { addFavoriteRecipe, getRecipes, getUsersWithToken, login } from "./api";

function Recipe(props: {
  name: string;
  ingredients: string[];
  id: string;
  onAddedToFavorite: () => void;
}) {
  async function handleAddToFavorites() {
    await addFavoriteRecipe(props.id);
    props.onAddedToFavorite();
  }

  return (
    <table className="recipe">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ingrediens</th>
        </tr>
      </thead>
      <tr>
        <td>{props.name}</td>
        <td>
          <ul>
            {props.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </td>
      </tr>
      {/* Hvis du er logget ind, kan denne knap ses! */}
      <button onClick={handleAddToFavorites}>Add to favorites</button>
    </table>
  );
}

function Users(props: { email: string; name: string; favorites: string[] }) {
  return (
    <table className="user">
      <tr>
        <th>Favorite recipes</th>
      </tr>
      <tr>
        <td>
          <ul>
            {props.favorites.map((favorites) => (
              <li>{favorites}</li>
            ))}
          </ul>
        </td>
      </tr>
    </table>
  );
}

function LoginForm({ onLogin }: { onLogin: () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("login");
    const data = await login(email, password);
    /**
     * 1. Gem token i localstorage
     * 2. Lav en request til user-db-api med token i headeren
     * 3. I user-db-api skal den header så læses og valideres.
     * 4. Hvis validering fejler skal der kastes en fejl
     * 5. Hvis validering lykkes skal der returneres det der skal returneres
     */

    if (typeof data === "object") {
      localStorage.setItem("token", data.token);
      onLogin();
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:&nbsp;&nbsp;<input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
      &nbsp;&nbsp;Password:&nbsp;&nbsp;{" "} 
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      &nbsp; &nbsp;
      <button type="submit"> &nbsp;&nbsp;login &nbsp; </button>
    </form>
  );
}

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    handleFetchRecipes();
  }, []);

  async function handleFetchRecipes() {
    const recipes = await getRecipes();
    setRecipes(recipes);
  }

  async function handleFetchUsers() {
    //props: {id: string}
    const token = localStorage.getItem("token") as string;
    const user = await getUsersWithToken(token);
    setUser(user);
  }

  // if logged in and there is a user map the recipe ids to recipe names for display
  const recipeNames: string[] = [];
  if (user) {
    for (const favorite of user.favorites) {
      const recipe = recipes.find((recipe) => recipe.id === favorite);

      if (recipe) {
        const exist = recipeNames.includes(recipe!.name);
        if (!exist){
        recipeNames.push(recipe.name);
        }
      }
    }
  }

  return (
    <div className="App">
      <h1>Recipe universe</h1>
      <hr />
      <LoginForm onLogin={handleFetchUsers} />
      <section className="section-left">
        {recipes.map((recipe) => (
          <Recipe
            name={recipe.name}
            ingredients={recipe.ingredients}
            id={recipe.id}
            onAddedToFavorite={handleFetchUsers}
          />
        ))}
      </section>

      <section className="section-left">
        {user && (
          <Users email={user.email} name={user.name} favorites={recipeNames} />
        )}
      </section>
    </div>
  );
}

export default App;
