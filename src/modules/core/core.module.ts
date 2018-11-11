import { Module } from '@nestjs/common';
import { BudgetService } from './services/budget.service';
import { GoalsService } from './services/goals.service';

@Module({
	imports: [],
	controllers: [],
	providers: [BudgetService, GoalsService],
	exports: [BudgetService, GoalsService],
})
export class CoreModule {
}
