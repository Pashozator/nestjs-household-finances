import { Injectable } from '@nestjs/common';
import { Goal } from '../../../utilities/types/goal';
import { guid } from '../../../utilities/guid';

@Injectable()
export class GoalsService {
	private goals: Goal[];

	constructor() {
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

		this.goals[index].realized = true;
	}
}
