// import * as Express from "express";
// import { Request, Response } from "express";
// import { requireJwtMiddleware } from "../user/jwt/middleware";
// import { encodeSession } from "../user/jwt/encode";
// import { Session } from "../user/user";

// const app = Express();

// // Set up middleware to protect the /protected route. This must come before routes.
// app.use("/protected", requireJwtMiddleware);
// // If you want to protect _all_ routes instead of just /protected, uncomment the next line
// // app.use(authMiddleware);

// // Set up an HTTP Post listener at /sessions, which will "log in" the caller and return a JWT 
// app.post("/sessions", (req: Request, res: Response) => {
//     // This route is unprotected, anybody can call it
//     // TODO: Validate username/password
//     const session = encodeSession("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg", {
//         id: 1,
//         username: "some user",
//         dateCreated: Date.now() //timestamp        
//     });
    
//     res.status(201).json(session);
// });

// // Set up an HTTP Get listener at /protected. The request can only access it if they have a valid JWT token
// app.get("/protected", (req: Request, res: Response) => {
//     // The auth middleware protects this route and sets res.locals.session which can be accessed here
//     const session: Session = res.locals.session;

//     res.status(200).json({ message: `Your username is ${session.username}` });
// });