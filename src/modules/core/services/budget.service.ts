import { Injectable } from '@nestjs/common';
import { Budget } from '../../../utilities/types/budget';
import { Operation } from '../../../utilities/types/operation';
import { guid } from '../../../utilities/guid';

@Injectable()
export class BudgetService {
	private budget: Budget;

	constructor() {
		this.budget = new Budget();
	}

	public getBudget(): Budget {
		return this.budget;
	}

	public addOperation(operation: Operation): Operation {
		operation.id = guid();

		this.budget.operations = [operation, ...this.budget.operations];
		this.budget.debit = this.calculateDebit(this.budget.operations);

		return operation;
	}

	public editOperation(id: string, operation: Operation): void {
		const index = this.budget.operations.findIndex(_operation => _operation.id === id);

		this.budget.operations[index] = operation;
		this.budget.debit = this.calculateDebit(this.budget.operations);
	}

	public removeOperation(id: string): void {
		this.budget.operations = [...this.budget.operations.filter(operation => operation.id !== id)];
		this.budget.debit = this.calculateDebit(this.budget.operations);
	}

	private calculateDebit(operations: Operation[]): number {
		let debit = 0;

		for (const operation of operations) {
			debit += operation.value;
		}

		return debit;
	}
}
