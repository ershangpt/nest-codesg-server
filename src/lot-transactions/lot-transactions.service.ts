import { Injectable } from '@nestjs/common';
import { CreateLotTransactionDto } from './dto/create-lot-transaction.dto';
import { UpdateLotTransactionDto } from './dto/update-lot-transaction.dto';
import { LotTransaction } from './entities/lot-transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lot } from 'src/lots/entities/lot.entity';

@Injectable()
export class LotTransactionsService {
  constructor(
    @InjectRepository(LotTransaction)
    private lotTxnRepository: Repository<LotTransaction>,
    @InjectRepository(Lot)
    private lotRepository: Repository<Lot>,
  ) {}

  async create(createLotTransactionDto: CreateLotTransactionDto) {
    const lot = await this.lotRepository.findOneBy({
      id: createLotTransactionDto.lot,
    });
    if (createLotTransactionDto.txnType === 'credit') {
      createLotTransactionDto.previousRemainingPack = lot.remainingPack;
      createLotTransactionDto.currentRemainingPack =
        lot.remainingPack + createLotTransactionDto.txnPack;
    } else if (createLotTransactionDto.txnType === 'debit') {
      createLotTransactionDto.previousRemainingPack = lot.remainingPack;
      createLotTransactionDto.currentRemainingPack =
        lot.remainingPack - createLotTransactionDto.txnPack;
    }

    const updatedLot = {
      remainingPack: createLotTransactionDto.currentRemainingPack,
    };
    this.lotRepository.save({ ...lot, ...updatedLot });

    const txn = this.lotTxnRepository.create(createLotTransactionDto);
    return this.lotTxnRepository.save(txn);
  }

  findAll() {
    return this.lotTxnRepository.find();
  }

  findOne(id: number) {
    return this.lotTxnRepository.findOneBy({ id });
  }
}
