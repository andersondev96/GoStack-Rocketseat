import { Router } from 'express';
import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

const upload = multer(uploadConfig);
const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const transactionsRepository = getCustomRepository(TransactionsRepository);

  const transactions = await transactionsRepository.find(); // Listar todas as transações

  const balance = await transactionsRepository.getBalance(); // Listar os balances

  return response.json({ transactions, balance }); // Retorna todas as transações e balances
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body; // Atributos que serão passados no corpo

  const createTransaction = new CreateTransactionService(); // Cria uma nova transação

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category,
  });

  return response.json(transaction); // Retorna a transação criada
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params; // Pega o parâmetro id que foi passsado na rota

  const deleteTransaction = new DeleteTransactionService(); // Chama o service que deleta a transação

  await deleteTransaction.execute(id); // Exclui a transação

  return response.status(204).send(); // Retorna código HTTP 204
});

transactionsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importTransactions = new ImportTransactionsService();

    const transactions = await importTransactions.execute(request.file.path); // Diretório do arquivo

    return response.json(transactions);
  },
);

export default transactionsRouter;
