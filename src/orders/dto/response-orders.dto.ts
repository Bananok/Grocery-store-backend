import Order from '../entities/order.entity';

export class ResponseOrdersDto extends Order {
  cost: number;
}
