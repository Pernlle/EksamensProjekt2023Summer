import { Category } from '../../recepe_domain/model/recepeCategoryEntity';
import { Ingredient } from '../../recepe_domain/model/recepeIngredientEntity';

export interface recepeQueryResultDto {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string;
  nutritionalInformation?: string;
  category: Category;
}
