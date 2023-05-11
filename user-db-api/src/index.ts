import express, { Express, Request, Response } from "express";
import cors from 'cors';

interface IUser {
  id: string;
  email: string;
  name: string;
  authentication: string; //AuthenticationAPI --
}

// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true, lowercase: true },
//   username: { type: String, required: true },
//   authentication: {
//     password: { type: String, required: true, select: false },
//     salt: { type: String, select: false },
//     sessionToken: { type: String, select: false },
//   },
// });

const users: IUser[] = [
  {
    id: "1",
    name: "Fruit salad",
    email: "Banana",
    authentication: "Strawberry"
  },
  {
    id: "2",
    name: "Fruit salad",
    email: "Banana",
    authentication: "Strawberry"
  },
  {
    id: "3",
    name: "Fruit salad",
    email: "Banana",
    authentication: "Strawberry"
  },
  {
    id: "4",
    name: "Fruit salad",
    email: "Banana",
    authentication: "Strawberry"
  },
];

const app: Express = express();
const port = "3002";

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/users", (req: Request, res: Response) => {
  // TODO: Look in database for users here and send them
  res.send(JSON.stringify(users));
});

app.get("/user", (req: Request, res: Response) => {
  const id = req.query.id;
  if (!id) return res.sendStatus(400); // Bad request

  // TODO: Look in database for specific user based on id
  const user = users.find((user) => user.id === id);
  if (user) res.send(JSON.stringify(user));

  res.sendStatus(404); // Not found
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
