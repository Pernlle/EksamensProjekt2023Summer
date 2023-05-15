// import jwt from 'jsonwebtoken';
// import { users } from '../../user-db-api/src/index';
// import express, { Express, Request, Response } from "express";

// const JWT_SECRET = 'mysecretkey';

// interface JwtPayload {
//   id: string;
//   email: string;
// }

// function generateToken(user: users): string {
//   const payload: JwtPayload = {
//     id: user.id,
//     email: user.email,
//   };
//   const options = {
//     expiresIn: '1h',
//   };
//   return jwt.sign(payload, JWT_SECRET, options);
// }

// async function login(email: string, password: string): Promise<{ token: string }> {
//   // const user = users.find((user) => user.email === email);
//   if (!user) {
//     throw new Error('Invalid email or password');
//   }
//   // const isValidPassword = await user.checkPassword(password);
//   // if (!isValidPassword) {
//   //   throw new Error('Invalid email or password');
//   // }
//   const token = generateToken(user);
//   return { token };
// }

// function verifyToken(token: string): JwtPayload {
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
//     return decoded;
//   } catch (err) {
//     throw new Error('Invalid token');
//   }
// }

// const app:  Express = express();
// const port = "3003";

// app.post('/login', async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const { token } = await login(email, password);
//     res.json({ token });
//   } catch {
//     return res.sendStatus(401);
//   }
// });

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
