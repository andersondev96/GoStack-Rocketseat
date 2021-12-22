// import AppError from '../errors/AppError';

import { getCustomRepository, getRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';
import Category from '../models/Category';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category);

    const { total } = await transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      // Verifica se o tipo é outcome e se o valor total não ultrapassa o valor
      throw new AppError('You do not enough balance');
    }

    // busca pela categoria
    let transactionCategory = await categoryRepository.findOne({
      where: {
        title: category,
      },
    });

    // Se a categoria não existir ela é criada
    if (!transactionCategory) {
      transactionCategory = categoryRepository.create({
        title: category,
      });

      // Salva a categoria criada
      await categoryRepository.save(transactionCategory);
    }

    // Cria uma nova transação
    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: transactionCategory,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
