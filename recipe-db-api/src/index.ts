import express, { Express, Request, Response } from "express";
import cors from 'cors';

interface IRecipe {
  id: string;
  name: string;
  ingredients: string[];
}

const recipes: IRecipe[] = [
  {
    id: "1",
    name: "Fruit salad",
    ingredients: ["Banana", "Strawberries"],
  },
  {
    id: "2",
    name: "Fruit salad2",
    ingredients: ["Banana", "Strawberries"],
  },
  {
    id: "3",
    name: "Fruit salad3",
    ingredients: ["Banana", "Strawberries"],
  },
  {
    id: "4",
    name: "Fruit salad4",
    ingredients: ["Banana", "Strawberries"],
  },
];

const app: Express = express();
const port = "3001";

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/recipes", (req: Request, res: Response) => {
  // TODO: Look in database for recipes here and send them
  res.send(JSON.stringify(recipes));
});

app.get("/recipe", (req: Request, res: Response) => {
  const id = req.query.id;
  if (!id) return res.sendStatus(400); // Bad request

  // TODO: Look in database for specific recipe based on id
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (recipe) res.send(JSON.stringify(recipe));

  res.sendStatus(404); // Not found
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
