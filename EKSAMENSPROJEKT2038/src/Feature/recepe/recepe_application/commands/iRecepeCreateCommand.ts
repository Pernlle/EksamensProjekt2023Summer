import { RecepeCreateRequestDto } from './RecepeCreateRequestDto';
export interface IRecepeCreateCommand {
  create(recepeCreateRequestDto: RecepeCreateRequestDto): void;
}
