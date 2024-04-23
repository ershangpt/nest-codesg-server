import { Test, TestingModule } from '@nestjs/testing';
import { LotTransactionsService } from './lot-transactions.service';

describe('LotTransactionsService', () => {
  let service: LotTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LotTransactionsService],
    }).compile();

    service = module.get<LotTransactionsService>(LotTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
