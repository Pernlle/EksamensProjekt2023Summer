import { Recepe } from '../../../recepe/recepe_domain/model/recepeEntity';
export interface IRecepeRepository {
  Add(recepe: Recepe): void;
  
}
