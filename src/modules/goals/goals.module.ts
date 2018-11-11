import { Module } from '@nestjs/common';
import { GoalsController } from './controllers/goals.controller';
import { CoreModule } from '../core/core.module';

@Module({
	imports: [CoreModule],
	controllers: [GoalsController],
	providers: [],
})
export class GoalsModule {
}
