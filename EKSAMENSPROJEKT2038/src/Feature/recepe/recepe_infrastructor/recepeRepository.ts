import { Context } from 'src/dbContext/context';
import { IRecepeRepository } from '../recepe_application/repositories/iRecepeRepository';
import { RecepeQueryResultDto } from '../recepe_application/query/recepeQueryResultDto';
import { Recepe } from '../recepe_domain/model/recepeEntity';

export class RecepeRepository implements IRecepeRepository {
  private readonly _db: Context;

  constructor(db: Context) {
    this._db = db;
  }

  Add(recepe: Recepe) {
    //this._db.Recepe.Add(recepe);
  }

  Load(id: number): Recepe {
    throw new Error('Method not implemented.');
  }

  Get(id: number): RecepeQueryResultDto {
    throw new Error('Method not implemented.');
  }

  GetAll(): RecepeQueryResultDto {
    throw new Error('Method not implemented.');
  }

  Update(recepe: Recepe): void {
    throw new Error('Method not implemented.');
  }
}
