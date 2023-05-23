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
    await addFavoriteRecipe(props.id, "1");
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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("login");
    const token = await login(email, password); 
    /** 
     * 1. Gem token i localstorage
     * 2. Lav en request til user-db-api med token i headeren
     * 3. I user-db-api skal den header så læses og valideres.
     * 4. Hvis validering fejler skal der kastes en fejl
     * 5. Hvis validering lykkes skal der returneres det der skal returneres
     */
    if (typeof token === 'string'){
    localStorage.setItem('token', token);
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
        Email: <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:{" "}
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">login</button>
    </form>
  );
}

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    handleFetchRecipes();
  }, []);

  async function handleFetchRecipes() {
    const recipes = await getRecipes();
    setRecipes(recipes);
  }

  useEffect(() => {
    handleFetchUsers();
  }, []);

  async function handleFetchUsers() { //props: {id: string}
    const token=localStorage.getItem('token') as string
    const users = await getUsersWithToken(token);
    setUsers(users);
  }

  return (
    <div className="App">
      <h1>Recipe universe</h1>
      <hr />
      <LoginForm/>
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
        {users.map((users) => {
          const recipeNames: string[] = [];
          for (const favorite of users.favorites) {
            const recipe = recipes.find((recipe) => recipe.id === favorite);

            if (recipe) {
              recipeNames.push(recipe.name);
            }
          }

          return (
            <Users
              email={users.email}
              name={users.name}
              favorites={recipeNames}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
