export class recepe {
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
    ingredients: string,
    instructions: string,
    nutritionalInformation: string,
    category: string
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
