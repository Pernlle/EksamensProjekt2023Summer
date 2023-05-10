import React, { useEffect, useState } from "react";
import "./App.css";
import { IRecipe } from "./viewModels/recipeViewModel";


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

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    handleFetchRecipes();
  }, [])
  

  async function handleFetchRecipes() {
    const recipes = await getRecipes();
    setRecipes(recipes);
  }

  return (
    <div className="App">
      <h1>Recipe universe</h1>
      <hr />
      <pre>
        {recipes.map((recipe) => (
          <Recipe name={recipe.name} ingredients={recipe.ingredients} />
        ))}
      </pre>
    </div>
  );
}

export default App;
