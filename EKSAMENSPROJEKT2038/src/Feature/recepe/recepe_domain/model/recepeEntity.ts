import { Ingredient } from './recepeIngredientEntity';
import { Category } from './recepeCategoryEntity';
export class Recepe {
  private id: number;
  private name: string;
  private description: string;
  private ingredients: Ingredient[];
  private instructions: string;
  private nutritionalInformation?: string;
  private category: Category;

  constructor(
    id: number,
    name: string,
    description: string,
    ingredients: Ingredient[],
    instructions: string,
    nutritionalInformation: string | undefined,
    category: Category
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.nutritionalInformation = nutritionalInformation;
    this.category = category;
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number) {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string) {
    this.description = description;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }
  public setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  public getInstructions(): string {
    return this.instructions;
  }
  public setInstructions(instructions: string) {
    this.instructions = instructions;
  }

  public getNutritionalInformation(): string | undefined {
    return this.nutritionalInformation;
  }
  public setNutritionalInformation(nutritionalInformation: string | undefined) {
    this.nutritionalInformation = nutritionalInformation;
  }

  public getCategory(): Category {
    return this.category;
  }
  public setCategory(category: Category) {
    this.category = category;
  }
}
