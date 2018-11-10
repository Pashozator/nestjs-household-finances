import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './modules/budget/services/budget.module';
import { GoalsModule } from './modules/goals/goals.module';

@Module({
  imports: [
    BudgetModule,
    GoalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
