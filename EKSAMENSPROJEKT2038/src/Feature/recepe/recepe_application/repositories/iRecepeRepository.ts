import { IRecipe } from '../../../recepe/recepe_domain/model/recepeEntity';
import { RecipeQueryResultDto } from '../query/recepeQueryResultDto';
export interface IRecipeRepository {
  add(recepe: IRecipe): void;
  load(id: number): IRecipe;
  get(id: number): RecipeQueryResultDto;
  getAll(): RecipeQueryResultDto;
  update(recepe: IRecipe): void;
}
