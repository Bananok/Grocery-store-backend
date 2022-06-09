import Order from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column as Columndb,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

const tableName = 'productOrders';

@Entity({ name: tableName })
export class ProductOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Columndb('uuid')
  orderId: Order['id'];

  @Columndb('uuid')
  productId: Product['id'];

  @Columndb('int')
  numberProducts: number;

  @UpdateDateColumn()
  updatedAt: string;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne((type) => Product, (product) => product.productOrders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ManyToOne((type) => Order, (order) => order.productOrders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'orderId' })
  order: Order;
}
