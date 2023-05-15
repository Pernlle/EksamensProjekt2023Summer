import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { IRecipe } from "./viewModels/recipeViewModel";
import { IUser } from "./viewModels/userViewModel";

async function getRecipes(): Promise<IRecipe[]> {
  try {
    const response = await fetch("http://localhost:3001/recipes");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function Recipe(props: { name: string; ingredients: string[] }) {
  return (
    <div className="recipe">
      <h3>{props.name}</h3>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
          ))}
      </ul>
    </div>
  );
}

async function getUsers(): Promise<IUser[]> {
  try {
    const response = await fetch("http://localhost:3002/users");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function Users(props: { email: string; name: string; favorites: [] }) {
  return (
    <div className="user">
      <h3>{props.email}</h3>
      <h4>{props.name}</h4>
      <ul>
        {props.favorites.map((favorites) => (
          <li>{favorites}</li>
          ))}
      </ul>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);


  useEffect(() => {
    handleFetchRecipes();
  }, [])

  async function handleFetchRecipes() {
    const recipes = await getRecipes();
    setRecipes(recipes);
  }

  useEffect(()=> {
    handleFetchUsers();
  })

  async function handleFetchUsers() {
    const users = await getUsers();
    setUsers(users);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="App">
      <h1>Recipe universe</h1>
      <hr />
      <section className="section-left">
        {recipes.map((recipe) => (
          <Recipe name={recipe.name} ingredients={recipe.ingredients} />
          ))}
          </section>

          <section className="section-left">
        {users.map((users) => (
          <Users email={users.email}name={users.name} favorites={users.favorites} />
          ))}
      <form className="AddToFvorites" onSubmit={handleSubmit}>
        <label>Recipe -id/name- :</label> <input type="string"  />
        <button type="submit">Add to favorites</button>
      </form>
          </section>
    </div>
  );
}


export default App;
