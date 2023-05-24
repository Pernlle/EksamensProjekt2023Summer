import express, { Express, Request, Response } from "express";
import cors from "cors";
import { IRecipe, recipes } from "../../recipe-db-api/src/index";
import bodyParser from "body-parser";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "myverysecretkey"; //not very safe :()

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
  authentication?: string; //AuthenticationAPI token --
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
  const token = req.headers.authorization?.split(" ")[1];
  // TODO: Look in database for users here and send them
  try {
    const payload = token && verifyToken(token);
    if (payload && payload.id) {
      const user = users.find((user) => user.id === payload.id);
      res.send(JSON.stringify(user));
    }
  } catch (error) {
    res.status(404).json({ message: `User is not authorized.` });
  }
});

// app.get("/user/favorites", (req: Request, res: Response) => {
//   const id = req.query.id;
//   if (!id) return res.sendStatus(400); // Bad request

//   const token = req.body;
//   if (verifyToken(token)) {
//     // TODO: Look in database for specific user based on id
//     const user = users.find((user) => user.id === id);
//     if (user) res.send(JSON.stringify(user.favorites));
//   }
//   res.status(404); // Not found
// });

app.put("/user/favorites", (req, res) => {
  const { recipeId } = req.body;
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const payload = token && verifyToken(token);
    if (payload && payload.id) {
      const userId = payload.id; //easy solved
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
        return res
          .status(404)
          .json({ message: `User with ID ${user} not found.` });
      }

      // Check if the recipe is already in the user's favorites
      if (user.favorites.find((r) => r.id === recipeId)) {
        return res
          .status(400)
          .json({ message: "Recipe is already in favorites." });
      }

      user.favorites.push(recipeId);
    }
    res.status(201).json({ message: "Recipe added to favorites." });
  } catch (error) {
    res.status(404).json({ message: `User is not authorized.` });
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
