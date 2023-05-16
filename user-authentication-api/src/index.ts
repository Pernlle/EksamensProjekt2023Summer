import jwt from "jsonwebtoken";
import express, { Express, Request, Response } from "express";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

const users: IUser[] = [
  {
    id: "1",
    name: "Otto",
    email: "otto@mail.dk",
    password: "1234",
  },
  {
    id: "2",
    name: "Karen",
    email: "karen@mail.dk",
    password: "1234",
  },
  {
    id: "3",
    name: "Ole",
    email: "ole@mail.dk",
    password: "1234",
  },
  {
    id: "4",
    name: "Gerda",
    email: "gerda@mail.dk",
    password: "1234",
  },
];

const JWT_SECRET = "mysecretkey";

interface JwtPayload {
  id: string;
  email: string;
}

function generateToken(user: IUser): string {
  const payload: JwtPayload = {
    id: user.id,
    email: user.email,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

async function login(
  email: string,
  password: string
): Promise<{ token: string }> {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isValidPassword = password === user.password;
  if (!isValidPassword) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken(user);
  return { token };
}

const app: Express = express();
const port = "3003";

app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token } = await login(email, password);
    res.json({ token });
  } catch {
    return res.sendStatus(401);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// app.get('/users', async (req: Request, res: Response) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       throw new Error('Missing authorization header');
//     }
//     const token = authHeader.split(' ')[1];
//     const { id, email } = verifyToken(token);
//     const user = await users.find();
//     res.json({ user });
//   } catch {
//     return res.sendStatus(401);
//   }
// });

// export default app;
// export { login, verifyToken };
