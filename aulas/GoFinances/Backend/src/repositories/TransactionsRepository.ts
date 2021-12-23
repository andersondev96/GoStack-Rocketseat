import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    // Agrupa as transações pelo seu tipo
    const balance = transactions.reduce(
      (accumulator: Balance, transaction: Transaction) => {
        switch (transaction.type) {
          // Soma as transações do tipo income
          case 'income':
            accumulator.income += Number(transaction.value);
            accumulator.total += Number(transaction.value);
            break;
          // Soma as transações do tipo outcome
          case 'outcome':
            accumulator.outcome += Number(transaction.value);
            accumulator.total -= Number(transaction.value);
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    return balance;
  }
}

export default TransactionsRepository;
