import { Recepe } from '../../../recepe/recepe_domain/model/recepeEntity';
//import User
export class Rating {
  id;
  recepeId;
  userId;
  ratingValue;
  constructor(
    id: number,
    recepeId: Recepe,
    userId: number,
    ratingValue: number
  ) {
    this.id = id;
    this.recepeId = recepeId;
    this.userId = userId;
    this.ratingValue = ratingValue;
  }
}
