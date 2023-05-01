import { IRecepeCreateCommand } from '../iRecepeCreateCommand';
import { RecepeCreateRequestDto } from '../RecepeCreateRequestDto';
export class RecepeCreateCommand {
    private readonly  _recepeRepository: IRecepeRepository;
    RecepeCreateCommand(recepeRepository: IRecepeRepository){
        _recepeRepository=recepeRepository;
    }
    IRecepeCreateCommand.Create(RecepeCreateRequestDto: RecepeCreateRequestDto): void {
        
    }
}
