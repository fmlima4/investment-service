import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { Investment } from './investment.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody  } from '@nestjs/swagger';

@Controller('investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Get()
  @ApiOperation({ summary: 'Get all investments' }) 
  @ApiResponse({ status: 200, description: 'List of investments.', type: [Investment] })
  @ApiTags('investments') // Define a tag para este controlador
  findAll() {
    return this.investmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one investment' }) 
  @ApiResponse({ status: 200, description: 'details of one investment.', type: Investment})
  @ApiTags('investments') // Define a tag para este controlador
  findOne(@Param('id') id: number) {
    return this.investmentService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new investment' }) 
  @ApiBody({
    description: 'Investment object to be created',
    type: Investment,
    examples: {
      default: {
        summary: 'Exemplo de investimento',
        value: {
          id: 1,
          name: 'CDB',
          description: 'Certificado de Depósito Bancário',
          type: 'fixed-income',
          rate: 8.5,
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Investment created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiTags('investments') // Define a tag para este controlador
  create(@Body() investment: Investment) {
    return this.investmentService.create(investment);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an investment' })
  @ApiBody({
    description: 'Investment object to be updated',
    type: Investment,
    examples: {
      default: {
        summary: 'Exemplo de atualização de investimento',
        value: {
          name: 'Novo CDB',
          description: 'Certificado de Depósito Bancário com nova descrição',
          type: 'fixed-income',
          rate: 9.0,
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Investment updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiTags('investments') // Define a tag para este controlador
  update(@Param('id') id: number, @Body() investment: Partial<Investment>) {
    return this.investmentService.update(id, investment);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one investment' }) 
  @ApiResponse({ status: 200, description: 'Investment deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiTags('investments') // Define a tag para este controlador
  remove(@Param('id') id: number) {
    return this.investmentService.remove(id);
  }
}
