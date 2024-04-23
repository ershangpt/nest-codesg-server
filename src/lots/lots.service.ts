import { Injectable } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lot } from './entities/lot.entity';
import { Repository } from 'typeorm';
import { LotTransaction } from 'src/lot-transactions/entities/lot-transaction.entity';

@Injectable()
export class LotsService {
  constructor(
    @InjectRepository(Lot)
    private lotRepository: Repository<Lot>,
    @InjectRepository(LotTransaction)
    private lotTxnRepository: Repository<LotTransaction>,
  ) {}

  async create(createLotDto: CreateLotDto) {
    createLotDto.remainingPack = createLotDto.totalPack;
    const lot = this.lotRepository.create(createLotDto);
    const data = await this.lotRepository.save(lot);

    const lotTxn = {
      txnType: 'credit',
      txnPack: createLotDto.totalPack,
      previousRemainingPack: createLotDto.totalPack,
      currentRemainingPack: createLotDto.totalPack,
      lot: data.id,
    };
    const lotTxnTT = this.lotTxnRepository.create(lotTxn);
    this.lotTxnRepository.save(lotTxnTT);
    return data;
  }

  findAll() {
    return this.lotRepository.find();
  }

  findOne(id: number) {
    return this.lotRepository.find({
      where: {
        id,
      },
      relations: ['lotTransactions'],
    });
  }

  async update(id: number, updateLotDto: UpdateLotDto) {
    const lot = await this.findOne(id);
    return this.lotRepository.save({ ...lot, ...updateLotDto });
  }

  async remove(id: number) {
    const lot = await this.findOne(id);
    return this.lotRepository.remove(lot);
  }
}
