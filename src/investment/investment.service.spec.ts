import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentService } from './investment.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Investment } from './investment.entity';
import { Repository } from 'typeorm';

describe('InvestmentService', () => {
  let service: InvestmentService;
  let repo: Repository<Investment>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvestmentService,
        {
          provide: getRepositoryToken(Investment),
          useClass: Repository, // Mocka o repositório
        },
      ],
    }).compile();

    service = module.get<InvestmentService>(InvestmentService);
    repo = module.get<Repository<Investment>>(getRepositoryToken(Investment));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new investment', async () => {
    const investment = { name: 'Tesouro Selic', type: 'Renda Fixa' } as Investment;
    jest.spyOn(repo, 'save').mockResolvedValue(investment);

    expect(await service.create(investment)).toEqual(investment);
  });
});
