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

	public addGoal(goal: Goal): void {
		goal.id = guid();

		this.goals = [goal, ...this.goals];
	}

	public removeGoal(id: string): void {
		this.goals = [...this.goals.filter(goal => goal.id !== id)];
	}
}
