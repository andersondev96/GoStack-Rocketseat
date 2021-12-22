import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import Transaction from './Transaction';

@Entity('categories') // Nome da tabela
class Category {
  @PrimaryGeneratedColumn('uuid') // Imnforma que é chave primária e seu tipo é uuid
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Transaction, transaction => transaction.category)
  transaction: Transaction;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @Column({ select: false })
  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default Category;
