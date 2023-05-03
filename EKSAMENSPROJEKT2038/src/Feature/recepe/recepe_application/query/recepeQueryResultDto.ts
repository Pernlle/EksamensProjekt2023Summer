import { IRecipe } from '../../recepe_domain/model/recepeEntity';

export class RecipeQueryResultDto {
  private dtoObject: IRecipe;
  constructor(dtoObject: IRecipe) {
    this.dtoObject = dtoObject;
  }
}
