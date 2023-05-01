import { Recepe } from '../../../recepe/recepe_domain/model/recepeEntity';
import { RecepeQueryResultDto } from '../query/recepeQueryResultDto';
export interface IRecepeRepository {
  Add(recepe: Recepe): void;
  Load(id: number): Recepe;
  Get(id: number): RecepeQueryResultDto;
  GetAll(): RecepeQueryResultDto;
  Update(recepe: Recepe): void;
}
