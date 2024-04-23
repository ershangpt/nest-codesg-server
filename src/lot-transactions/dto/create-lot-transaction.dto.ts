import { ApiProperty } from '@nestjs/swagger';

export class CreateLotTransactionDto {
  @ApiProperty()
  txnType: string;

  @ApiProperty()
  txnPack: number;

  @ApiProperty()
  lot: number;

  previousRemainingPack: number;
  currentRemainingPack: number;
  createdAt: Date;
  updatedAt: Date;
}
