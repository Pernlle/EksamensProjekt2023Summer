
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { IRecipe, recipes } from "../../recipe-db-api/src/index";


export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  authentication: string; //AuthenticationAPI --
  favorites: IRecipe[];
}

export const users: IUser[] = [
  {
    id: "1",
    name: "Fruit salad",
    email: "Banana",
    password: "",
    authentication: "Strawberry",
    favorites: [],
  },
  {
    id: "2",
    name: "Fruit salad",
    email: "Banana",
    password: "",
    authentication: "Strawberry",
    favorites: [],
  },
  {
    id: "3",
    name: "Fruit salad",
    email: "Banana",
    password: "",
    authentication: "Strawberry",
    favorites: [],
  },
  {
    id: "4",
    name: "Fruit salad",
    email: "Banana",
    password: "",
    authentication: "Strawberry",
    favorites: [],
  },
];

const app: Express = express();
const port = "3002";

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server + user");
});

app.get("/users", (req: Request, res: Response) => {
  // TODO: Look in database for users here and send them
  res.send(JSON.stringify(users));
});

//change this
app.get("/user/favorites", (req: Request, res: Response) => {
  const id = req.query.id;
  if (!id) return res.sendStatus(400); // Bad request

  // TODO: Look in database for specific user based on id
  const user = users.find((user) => user.id === id);
  if (user) res.send(JSON.stringify(user.favorites));

  res.sendStatus(404); // Not found
});

app.put("/user/favorites", (req, res) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: `User with ID ${user} not found.` });
  }

  const { id } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ message: "Recipe ID is missing from request body." });
  }

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return res.status(404).json({ message: `Recipe with ID ${id} not found.` });
  }

  // Check if the recipe is already in the user's favorites
  if (user.favorites.find((r) => r.id === id)) {
    return res.status(400).json({ message: "Recipe is already in favorites." });
  }

  user.favorites.push(recipe);

  res.status(201).json({ message: "Recipe added to favorites." });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
