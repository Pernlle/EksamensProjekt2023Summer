import { IRecepeGetAllQuery } from '../iRecepeGetAllQuery';
import { RecepeQueryResultDto } from '../recepeQueryResultDto';

export class RecepeGetAllQuery implements IRecepeGetAllQuery {
  GetAll(): RecepeQueryResultDto {
    throw new Error('Method not implemented.');
  }
}
