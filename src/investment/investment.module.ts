import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investment } from './investment.entity';
import { InvestmentService } from './investment.service';
import { InvestmentController } from './investment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Investment])],  // Importe a entidade aqui
  providers: [InvestmentService],
  controllers: [InvestmentController],
})
export class InvestmentModule {}
