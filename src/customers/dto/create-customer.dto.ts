import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  mobile: string;

  @ApiProperty()
  shopName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  ratePerPack: number;

  status?: string;
  createdAt: Date;
  updatedAt: Date;
}
