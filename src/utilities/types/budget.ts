import { Operation } from './operation';

export class Budget {
  constructor(
    public operations: Operation[] = [],
    public debit: number = 0,
  ) {
  }
}
