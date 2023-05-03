import { RecipeQueryResultDto as RecipeQueryResultDto } from './recepeQueryResultDto';
export interface IRecipeGetAllQuery {
  GetAll(): RecipeQueryResultDto;
}
