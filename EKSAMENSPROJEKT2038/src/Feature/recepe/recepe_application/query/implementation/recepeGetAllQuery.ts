import { IRecipeRepository } from '../../repositories/iRecepeRepository';
import { IRecipeGetAllQuery } from '../iRecepeGetAllQuery';
import { RecipeQueryResultDto } from '../recepeQueryResultDto';

export class RecipeGetAllQuery implements IRecipeGetAllQuery {
  private readonly _recepeRepository: IRecipeRepository;

  constructor(recepeRepository: IRecipeRepository) {
    this._recepeRepository = recepeRepository;
  }

  GetAll(): RecipeQueryResultDto {
    return this._recepeRepository.getAll();
  }
}
