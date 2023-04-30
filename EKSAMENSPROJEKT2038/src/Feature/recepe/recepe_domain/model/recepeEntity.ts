import { Ingredient } from './recepeIngredientEntity';
import { Category } from './recepeCategoryEntity';
export class Recepe {
  id;
  name;
  description;
  ingredients;
  instructions;
  nutrisionalInformation?;
  category;
  constructor(
    id: number,
    name: string,
    description: string,
    ingredients: Ingredient[],
    instructions: string,
    nutritionalInformation: string,
    category: Category
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.nutrisionalInformation = nutritionalInformation;
    this.category = category;
  }
}
