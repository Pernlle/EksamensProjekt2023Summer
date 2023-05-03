import { IRecipeRepository } from '../../repositories/iRecepeRepository';
import { IRecipeGetQuery } from '../iRecepeGetQuery';
import { RecipeQueryResultDto } from '../recepeQueryResultDto';

export class RecipeGetQuery implements IRecipeGetQuery {
  private readonly _recepeRepository: IRecipeRepository;

  constructor(recepeRepository: IRecipeRepository) {
    this._recepeRepository = recepeRepository;
  }

  Get(id: number): RecipeQueryResultDto {
    return this._recepeRepository.get(id);
  }
}
