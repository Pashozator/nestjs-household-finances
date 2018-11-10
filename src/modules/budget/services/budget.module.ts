import { Module } from '@nestjs/common';
import { BudgetController } from '../controllers/budget.controller';
import { BudgetService } from '../budget.service';

@Module({
  controllers: [BudgetController],
  providers: [BudgetService]
})
export class BudgetModule {}
