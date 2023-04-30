export class Ingredient {
  id;
  name;
  description;
  NutritionalInformation;
  constructor(
    id: number,
    name: string,
    description: string,
    NutritionalInformation: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.NutritionalInformation = NutritionalInformation;
  }
}
