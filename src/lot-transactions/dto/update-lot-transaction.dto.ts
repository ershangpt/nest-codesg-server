import { PartialType } from '@nestjs/swagger';
import { CreateLotTransactionDto } from './create-lot-transaction.dto';

export class UpdateLotTransactionDto extends PartialType(CreateLotTransactionDto) {}
