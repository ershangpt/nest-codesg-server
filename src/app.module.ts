import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { dataSourceOptions } from 'db/data-source';
import { OrdersModule } from './orders/orders.module';
import { LotsModule } from './lots/lots.module';
import { LotTransactionsModule } from './lot-transactions/lot-transactions.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CustomersModule, OrdersModule, LotsModule, LotTransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
