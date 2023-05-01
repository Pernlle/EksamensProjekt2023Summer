import { IRecepeRepository } from '../../repositories/iRecepeRepository';
import { IRecepeGetAllQuery } from '../iRecepeGetAllQuery';
import { RecepeQueryResultDto } from '../recepeQueryResultDto';

export class RecepeGetAllQuery implements IRecepeGetAllQuery {
  private readonly _recepeRepository: IRecepeRepository;

  constructor(recepeRepository: IRecepeRepository) {
    this._recepeRepository = recepeRepository;
  }

  GetAll(): RecepeQueryResultDto {
    return this._recepeRepository.GetAll();
  }
}
