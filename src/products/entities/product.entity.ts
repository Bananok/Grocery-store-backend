import { ProductOrder } from 'src/orders/entities/products-order.entity';
import {
  PrimaryGeneratedColumn,
  Column as Columndb,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

const tableName = 'products';

@Entity({ name: tableName })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Columndb('int')
  productType: number;

  @Columndb('varchar')
  name: string;

  @Columndb('float')
  cost: number;

  @Columndb('varchar')
  img: string;

  @UpdateDateColumn()
  updatedAt: string;

  @CreateDateColumn()
  createdAt: string;

  @OneToMany((type) => ProductOrder, (productOrder) => productOrder.product)
  productOrders?: ProductOrder[];
}
