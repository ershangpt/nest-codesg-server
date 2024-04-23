import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LotsService } from './lots.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Lot } from './entities/lot.entity';

@Controller('lots')
@ApiTags('lot')
export class LotsController {
  constructor(private readonly lotsService: LotsService) {}

  @Post()
  @ApiCreatedResponse({ type: Lot })
  create(@Body() createLotDto: CreateLotDto) {
    return this.lotsService.create(createLotDto);
  }

  @Get()
  @ApiOkResponse({ type: Lot, isArray: true })
  findAll() {
    return this.lotsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Lot })
  findOne(@Param('id') id: string) {
    return this.lotsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Lot })
  update(@Param('id') id: string, @Body() updateLotDto: UpdateLotDto) {
    return this.lotsService.update(+id, updateLotDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Lot })
  remove(@Param('id') id: string) {
    return this.lotsService.remove(+id);
  }
}
