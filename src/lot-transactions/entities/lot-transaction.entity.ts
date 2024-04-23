import { ApiProperty } from '@nestjs/swagger';
import { Lot } from 'src/lots/entities/lot.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LotTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['credit', 'debit'],
    default: 'debit',
  })
  @ApiProperty()
  txnType: string;

  @Column()
  @ApiProperty()
  txnPack: number;

  @Column()
  previousRemainingPack: number;

  @Column()
  currentRemainingPack: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;

  @ManyToOne(() => Lot, (lot) => lot.lotTransactions)
  @ApiProperty()
  lot: number;
}
