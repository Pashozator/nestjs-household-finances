import { Module } from '@nestjs/common';
import { BudgetController } from './controllers/budget.controller';
import { CoreModule } from '../core/core.module';

@Module({
	imports: [CoreModule],
	controllers: [BudgetController],
	providers: [],
})
export class BudgetModule {
}
