export class Ingredient {
  private id: number;
  private name: string;
  private description: string;
  private nutritionalInformation?: string;

  constructor(
    id: number,
    name: string,
    description: string,
    nutritionalInformation: string | undefined
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.nutritionalInformation = nutritionalInformation;
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

  public getNutritionalInformation(): string | undefined {
    return this.nutritionalInformation;
  }
  public setNutritionalInformation(nutritionalInformation: string | undefined) {
    this.nutritionalInformation = nutritionalInformation;
  }
}
