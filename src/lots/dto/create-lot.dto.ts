import { ApiProperty } from '@nestjs/swagger';

export class CreateLotDto {
  @ApiProperty()
  lotNumber: string;

  @ApiProperty()
  order: number;

  @ApiProperty()
  totalPack: number;

  isSettled: boolean;
  remainingPack: number;
  createdAt: Date;
  updatedAt: Date;
}
