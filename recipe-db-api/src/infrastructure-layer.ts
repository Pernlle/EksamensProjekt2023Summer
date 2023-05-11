// expressAdapter.ts - Infrastructure layer
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { IRecipeService, createRecipeService } from "./application-layer";
import { createRecipeRepository } from "./domain-layer";

export function createExpressAdapter(service: IRecipeService): Express {
  const app: Express = express();
  const port = "3001";

  app.use(cors());

  const recipeRepository = createRecipeRepository();
  const recipeService = createRecipeService(recipeRepository);

  // Define routes
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.get("/recipes", async (req: Request, res: Response) => {
    const recipes = await recipeService.getAllRecipes();
    res.send(JSON.stringify(recipes));
    //res.json(recipes);
  });

  app.get("/recipe", async (req: Request, res: Response) => {
    const id = req.query.id;
    if (!id) return res.sendStatus(400); // Bad request

    const recipe = await recipeService.getRecipeById(id.toString());
    if (recipe) res.send(JSON.stringify(recipe));
    //res.json(recipe);

    res.sendStatus(404); // Not found
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

  return app;
}
