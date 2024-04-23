import { Module } from '@nestjs/common';
import { LotsService } from './lots.service';
import { LotsController } from './lots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lot } from './entities/lot.entity';
import { LotTransaction } from 'src/lot-transactions/entities/lot-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lot, LotTransaction])],
  controllers: [LotsController],
  providers: [LotsService],
})
export class LotsModule {}
