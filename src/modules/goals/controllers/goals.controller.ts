import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

	@Post('/')
	public addGoal(@Body() body: Goal): DefaultResponse<boolean> {
		this.service.addGoal(body);

		return {
			data: true,
			error: null,
		};
	}

	@Put('/:id')
	public editGoal(@Param() params, @Body() body: Goal): DefaultResponse<boolean> {
		this.service.editGoal(params.id, body);

		return {
			data: true,
			error: null,
		};
	}

	@Delete('/:id')
	public removeGoal(@Param() params): DefaultResponse<boolean> {
		this.service.removeGoal(params.id);

		return {
			data: true,
			error: null,
		};
	}
}
