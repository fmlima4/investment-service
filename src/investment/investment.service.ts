import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investment } from './investment.entity';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(Investment)
    private readonly investmentRepository: Repository<Investment>,
  ) {}

  findAll(): Promise<Investment[]> {
    return this.investmentRepository.find();
  }

  findOne(id: number): Promise<Investment> {
    return this.investmentRepository.findOne({ where: { id } });
  }

  create(investment: Investment): Promise<Investment> {
    return this.investmentRepository.save(investment);
  }

  async update(id: number, investment: Partial<Investment>): Promise<void> {
    await this.investmentRepository.update(id, investment);
  }

  async remove(id: number): Promise<void> {
    await this.investmentRepository.delete(id);
  }
}
