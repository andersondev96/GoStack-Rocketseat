import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    // Busca pelo id que a pessoa quer excluir
    const transaction = await transactionsRepository.findOne(id);

    // Se o id não existir aparece uma mensagem de erro
    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    // Se existir remove o elemento que estava neste id
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
