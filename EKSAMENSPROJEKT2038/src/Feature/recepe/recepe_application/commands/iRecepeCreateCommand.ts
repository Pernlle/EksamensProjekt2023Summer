import { RecipeCreateRequestDto } from './RecepeCreateRequestDto';
export interface IRecipeCreateCommand {
  create(recipeCreateRequestDto: RecipeCreateRequestDto): void;
}
