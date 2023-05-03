import { IRecipe } from 'src/Feature/recepe/recepe_domain/model/recepeEntity';
import { IRecipeRepository } from '../../repositories/iRecepeRepository';
import { RecipeCreateRequestDto } from '../RecepeCreateRequestDto';
import { IRecipeCreateCommand } from '../iRecepeCreateCommand';
export class RecipeCreateCommand implements IRecipeCreateCommand {
  private readonly _recepeRepository: IRecipeRepository;

  constructor(recepeRepository: IRecipeRepository) {
    this._recepeRepository = recepeRepository;
  }

  create(recepeCreateRequestDto: RecipeCreateRequestDto): void {
    this._recepeRepository.add(
      new Recipe(
        recepeCreateRequestDto.id,
        recepeCreateRequestDto.name,
        recepeCreateRequestDto.description,
        recepeCreateRequestDto.ingredients,
        recepeCreateRequestDto.instructions,
        recepeCreateRequestDto.nutritionalInformation,
        recepeCreateRequestDto.category
      )
    );
  }
}
