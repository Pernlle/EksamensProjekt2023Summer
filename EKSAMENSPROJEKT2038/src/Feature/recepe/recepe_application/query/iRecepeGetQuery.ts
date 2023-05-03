import { RecipeQueryResultDto } from './recepeQueryResultDto';
export interface IRecipeGetQuery {
  Get(id: number): RecipeQueryResultDto;
}
