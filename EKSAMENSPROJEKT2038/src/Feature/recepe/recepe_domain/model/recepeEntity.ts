import { Ingredient } from './recepeIngredientEntity';
import { Category } from './recepeCategoryEntity';
export class Recepe {
  private id: number;
  private name: string;
  private description: string;
  private ingredients: Ingredient[];
  private instructions: string;
  private nutrisionalInformation?: string;
  private category: Category;

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public getInstructions(): string {
    return this.instructions;
  }

  public getNutrisionalInformation(): string | undefined {
    return this.nutrisionalInformation;
  }

  public getCategory(): Category {
    return this.category;
  }

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
