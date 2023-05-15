import express, { Express, Request, Response } from "express";
import cors from "cors";
import { IRecipe, recipes } from "../../recipe-db-api/src/index";
import { ObjectId } from "mongodb";
import { collections } from "./db-service";
import bcrypt from "bcrypt";

export class User {
  constructor(
    id: ObjectId,
    email: string,
    name: string,
    password: string,

    authentication: string, //AuthenticationAPI --
    favorites: IRecipe[]
  ) {}
}

// async function checkPassword(password:string):Promise<boolean>{
//     return bcrypt.compare(password, this.password);
//   }

export const route: Express = express();
const port = "3002";

route.use(cors());

route.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server + user");
  try {
    const users = (await collections.users?.find({}).toArray()) as User[];
    res.status(200).send(users);
  } catch (error) {
    res.sendStatus(500);
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;
    const result = await collections.users?.insertOne(newUser);

    result ? res.sendStatus(201) : res.sendStatus(500);
  } catch {
    res.sendStatus(400);
  }
});

route.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`); 
});
