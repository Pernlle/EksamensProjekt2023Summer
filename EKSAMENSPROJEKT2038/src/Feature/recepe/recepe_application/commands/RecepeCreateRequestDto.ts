import { Ingredient } from '../../recepe_domain/model/recepeIngredientEntity';
import { Category } from '../../recepe_domain/model/recepeCategoryEntity';
export interface RecepeCreateRequestDto {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string;
  nutritionalInformation?: string;
  category: Category;
}