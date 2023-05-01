import { RecepeQueryResultDto } from './recepeQueryResultDto';
export interface IRecepeGetQuery {
  Get(id: number): RecepeQueryResultDto;
}
