import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LotTransactionsService } from './lot-transactions.service';
import { CreateLotTransactionDto } from './dto/create-lot-transaction.dto';
import { UpdateLotTransactionDto } from './dto/update-lot-transaction.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LotTransaction } from './entities/lot-transaction.entity';

@Controller('lot-transactions')
@ApiTags('lot-transactions')
export class LotTransactionsController {
  constructor(
    private readonly lotTransactionsService: LotTransactionsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: LotTransaction })
  create(@Body() createLotTransactionDto: CreateLotTransactionDto) {
    return this.lotTransactionsService.create(createLotTransactionDto);
  }

  @Get()
  @ApiOkResponse({ type: LotTransaction, isArray: true })
  findAll() {
    return this.lotTransactionsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LotTransaction })
  findOne(@Param('id') id: string) {
    return this.lotTransactionsService.findOne(+id);
  }
}
