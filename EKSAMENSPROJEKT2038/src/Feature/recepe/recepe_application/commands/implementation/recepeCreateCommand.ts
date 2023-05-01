import { Recepe } from 'src/Feature/recepe/recepe_domain/model/recepeEntity';
import { IRecepeRepository } from '../../repositories/iRecepeRepository';
import { RecepeCreateRequestDto } from '../RecepeCreateRequestDto';
import { IRecepeCreateCommand } from '../iRecepeCreateCommand';
export class RecepeCreateCommand implements IRecepeCreateCommand {
  private readonly _recepeRepository: IRecepeRepository;

  constructor(recepeRepository: IRecepeRepository) {
    this._recepeRepository = recepeRepository;
  }

  create(recepeCreateRequestDto: RecepeCreateRequestDto): void {
    this._recepeRepository.Add(
      new Recepe(
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
