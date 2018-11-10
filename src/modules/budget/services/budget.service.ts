import { Injectable } from '@nestjs/common';
import { Budget } from '../../../utilities/types/budget';

@Injectable()
export class BudgetService {
	public getBudget(): Budget {
		return new Budget();
	}
}
