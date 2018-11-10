import { Controller, Get } from '@nestjs/common';
import { GoalsService } from '../services/goals.service';
import { DefaultResponse } from '../../../utilities/types/default-response';
import { Goal } from '../../../utilities/types/goal';

@Controller('goals')
export class GoalsController {
	constructor(private readonly service: GoalsService) {
	}

	@Get('/')
	public getGoals(): DefaultResponse<Goal[]> {
		return {
			data: this.service.getGoals(),
			error: null,
		};
	}
}
