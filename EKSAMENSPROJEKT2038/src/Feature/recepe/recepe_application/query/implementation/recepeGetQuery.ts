import { IRecepeRepository } from '../../repositories/iRecepeRepository';
import { IRecepeGetQuery } from '../iRecepeGetQuery';
import { RecepeQueryResultDto } from '../recepeQueryResultDto';

export class RecepeGetQuery implements IRecepeGetQuery {
  private readonly _recepeRepository: IRecepeRepository;

  constructor(recepeRepository: IRecepeRepository) {
    this._recepeRepository = recepeRepository;
  }

  Get(id: number): RecepeQueryResultDto {
    return this._recepeRepository.Get(id);
  }
}
