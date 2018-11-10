import { Test, TestingModule } from '@nestjs/testing';
import { GoalsController } from './goals.controller';

describe('Goals Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [GoalsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: GoalsController = module.get<GoalsController>(GoalsController);
    expect(controller).toBeDefined();
  });
});
