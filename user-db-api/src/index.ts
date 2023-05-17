import express, { Express, Request, Response } from "express";
import cors from "cors";
import { IRecipe, recipes } from "../../recipe-db-api/src/index";
import bodyParser from "body-parser";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "mysecretkey"; //not very safe :()

function verifyToken(token: string): JwtPayload {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
}

export interface IUser {
  id: string;
  email?: string;
  name?: string;
  authentication?: string; //AuthenticationAPI --
  favorites: IRecipe[];
}

export const users: IUser[] = [
  {
    id: "1",
    favorites: [],
  },
  {
    id: "2",
    favorites: [],
  },
  {
    id: "3",
    favorites: [],
  },
  {
    id: "4",
    favorites: [],
  },
];

const app: Express = express();
const port = "3002";

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server + user");
});

// app.get("/users", (req: Request, res: Response) => {
//   // TODO: Look in database for users here and send them
//   res.send(JSON.stringify(users));
// });

//token verification getter
app.get("/user", (req: Request, res: Response) => {
  const token = req.body;
  // TODO: Look in database for users here and send them
  if (verifyToken(token)) {
    res.send(JSON.stringify(users));
  }
  res.sendStatus(404).json({ message: `User is not authorized.` });
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
  console.log("☀️☀️☀️☀️☀️ /user/favorites");
  console.log(JSON.stringify(req.body));
  const { recipeId, userId } = req.body;

  if (!recipeId) {
    return res
      .status(400)
      .json({ message: "Recipe ID is missing from request body." });
  }

  if (!userId) {
    return res
      .status(400)
      .json({ message: "User ID is missing from request body." });
  }

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: `User with ID ${user} not found.` });
  }

  // Check if the recipe is already in the user's favorites
  if (user.favorites.find((r) => r.id === recipeId)) {
    return res.status(400).json({ message: "Recipe is already in favorites." });
  }

  user.favorites.push(recipeId);

  res.status(201).json({ message: "Recipe added to favorites." });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
