import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BudgetService } from '../services/budget.service';
import { DefaultResponse } from '../../../utilities/types/default-response';
import { Budget } from '../../../utilities/types/budget';
import { Operation } from '../../../utilities/types/operation';

@Controller('budget')
export class BudgetController {
	constructor(private readonly service: BudgetService) {
	}

	@Get('/')
	public getBudget(): DefaultResponse<Budget> {
		return {
			data: this.service.getBudget(),
			error: null,
		};
	}

	@Post('/operations')
	public addOperation(@Body() body: Operation): DefaultResponse<Operation> {
		const operation = this.service.addOperation(body);

		return {
			data: operation,
			error: null,
		};
	}

	@Put('/operations/:id')
	public editOperation(@Param() params, @Body() body: Operation): DefaultResponse<boolean> {
		this.service.editOperation(params.id, body);

		return {
			data: true,
			error: null,
		};
	}

	@Delete('/operations/:id')
	public removeOperation(@Param() params): DefaultResponse<boolean> {
		this.service.removeOperation(params.id);

		return {
			data: true,
			error: null,
		};
	}
}
