import { Test, TestingModule } from '@nestjs/testing';
import { LotTransactionsController } from './lot-transactions.controller';
import { LotTransactionsService } from './lot-transactions.service';

describe('LotTransactionsController', () => {
  let controller: LotTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LotTransactionsController],
      providers: [LotTransactionsService],
    }).compile();

    controller = module.get<LotTransactionsController>(LotTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
