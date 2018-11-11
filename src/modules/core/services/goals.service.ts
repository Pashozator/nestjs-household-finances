import { Injectable } from '@nestjs/common';
import { Goal } from '../../../utilities/types/goal';
import { guid } from '../../../utilities/guid';
import { BudgetService } from './budget.service';
import { Operation } from '../../../utilities/types/operation';
import * as moment from 'moment';

@Injectable()
export class GoalsService {
	private goals: Goal[];

	constructor(private budgetService: BudgetService) {
		this.goals = [];
	}

	public getGoals(): Goal[] {
		return this.goals;
	}

	public addGoal(goal: Goal): Goal {
		goal.id = guid();

		this.goals = [goal, ...this.goals];

		return goal;
	}

	public editGoal(id: string, goal: Goal): void {
		const index = this.goals.findIndex(_goal => _goal.id === id);

		this.goals[index] = goal;
	}

	public removeGoal(id: string): void {
		this.goals = [...this.goals.filter(goal => goal.id !== id)];
	}

	public realizeGoal(id: string): void {
		const index = this.goals.findIndex(_goal => _goal.id === id);
		const goal = this.goals[index];

		goal.realized = true;

		this.budgetService.addOperation(new Operation(null, `Realizacja celu: ${goal.label}`, moment().format('YYYY-MM-DD'), -goal.value, goal.description));
	}
}
