import { Test, TestingModule } from '@nestjs/testing';
import { BudgetController } from './budget.controller';

describe('Budget Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BudgetController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BudgetController = module.get<BudgetController>(BudgetController);
    expect(controller).toBeDefined();
  });
});
