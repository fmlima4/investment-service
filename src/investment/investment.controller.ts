import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { Investment } from './investment.entity';

@Controller('investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Get()
  findAll() {
    return this.investmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.investmentService.findOne(id);
  }

  @Post()
  create(@Body() investment: Investment) {
    return this.investmentService.create(investment);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() investment: Partial<Investment>) {
    return this.investmentService.update(id, investment);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.investmentService.remove(id);
  }
}
