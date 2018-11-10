import { Injectable } from '@nestjs/common';
import { Goal } from '../../../utilities/types/goal';

@Injectable()
export class GoalsService {
	public getGoals(): Goal[] {
		return [];
	}
}
