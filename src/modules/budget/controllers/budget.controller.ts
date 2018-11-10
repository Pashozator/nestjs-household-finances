import { Controller, Get } from '@nestjs/common';
import { BudgetService } from '../services/budget.service';
import { DefaultResponse } from '../../../utilities/types/default-response';
import { Budget } from '../../../utilities/types/budget';

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
}
