import { ApiProperty } from '@nestjs/swagger';
import { LotTransaction } from 'src/lot-transactions/entities/lot-transaction.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Lot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  lotNumber: string;

  @Column()
  @ApiProperty()
  totalPack: number;

  @Column()
  @ApiProperty()
  remainingPack: number;

  @Column({
    type: 'boolean',
    default: false,
  })
  isSettled: boolean;

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

  @ManyToOne(() => Order, (order) => order.lots)
  @ApiProperty()
  order: number;

  @OneToMany(() => LotTransaction, (lotTxn) => lotTxn.lot)
  lotTransactions: LotTransaction[];
}
