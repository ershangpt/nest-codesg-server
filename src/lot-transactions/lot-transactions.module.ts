import { Module } from '@nestjs/common';
import { LotTransactionsService } from './lot-transactions.service';
import { LotTransactionsController } from './lot-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotTransaction } from './entities/lot-transaction.entity';
import { Lot } from 'src/lots/entities/lot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LotTransaction, Lot])],
  controllers: [LotTransactionsController],
  providers: [LotTransactionsService],
})
export class LotTransactionsModule {}
