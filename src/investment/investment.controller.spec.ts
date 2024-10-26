import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentController } from './investment.controller';  // Ajuste se necessário
import { InvestmentService } from './investment.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Investment } from './investment.entity';
import { Repository } from 'typeorm';

describe('InvestmentController', () => {
  let controller: InvestmentController;
  let service: InvestmentService;
  let repo: Repository<Investment>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentController],
      providers: [
        InvestmentService,
        {
          provide: getRepositoryToken(Investment),
          useClass: Repository, // Mock do repositório
        },
      ],
    }).compile();

    controller = module.get<InvestmentController>(InvestmentController);
    service = module.get<InvestmentService>(InvestmentService);
    repo = module.get<Repository<Investment>>(getRepositoryToken(Investment));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Adicione mais testes conforme necessário
});
