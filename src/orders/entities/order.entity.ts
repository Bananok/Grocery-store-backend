import { User } from 'src/users/user.entity';
import {
  PrimaryGeneratedColumn,
  Column as Columndb,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProductOrder } from './products-order.entity';

const tableName = 'orders';

@Entity({ name: tableName })
export default class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Columndb('uuid')
  userId: User['id'];

  @UpdateDateColumn()
  updatedAt: string;

  @CreateDateColumn()
  createdAt: string;

  @OneToMany((type) => ProductOrder, (po) => po.order, {
    eager: true,
    cascade: true,
  })
  productOrders: ProductOrder[];

  @ManyToOne((type) => User, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;
}
