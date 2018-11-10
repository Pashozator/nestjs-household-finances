import { Module } from '@nestjs/common';
import { BudgetController } from './controllers/budget.controller';
import { BudgetService } from './services/budget.service';

@Module({
	controllers: [BudgetController],
	providers: [BudgetService],
})
export class BudgetModule {
}
