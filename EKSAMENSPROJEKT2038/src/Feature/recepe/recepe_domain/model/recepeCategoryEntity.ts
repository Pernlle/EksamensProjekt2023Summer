export class Category {
  private id: number;
  private name: string;
  private description: string;
  
  constructor(
    id: number, 
    name: string, 
    description: string
    ) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
  }

  public getName(): string {
    return this.name;
  }
  public setName(value: string) {
    this.name = value;
  }

  public getDescription(): string {
    return this.description;
  }
  public setDescription(value: string) {
    this.description = value;
  }
}
