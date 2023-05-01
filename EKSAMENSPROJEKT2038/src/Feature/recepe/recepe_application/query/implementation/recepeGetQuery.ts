import { IRecepeGetQuery } from '../iRecepeGetQuery';
import { RecepeQueryResultDto } from '../recepeQueryResultDto';

export class RecepeGetQuery implements IRecepeGetQuery {
  Get(id: number): RecepeQueryResultDto {
    throw new Error('Method not implemented.');
  }
}
