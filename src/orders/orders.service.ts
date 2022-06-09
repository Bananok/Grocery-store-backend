import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { ResponseOrdersDto } from './dto/response-orders.dto';
import Order from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async create(
    createOrderDto: CreateOrderDto,
    userId: User['id'],
  ): Promise<Order> {
    return this.ordersRepository.save({
      userId,
      productOrders: createOrderDto.products,
    });
  }

  async findAll(userId: string): Promise<ResponseOrdersDto[]> {
    const orders = await this.ordersRepository.find({
      where: { userId },
      relations: ['productOrders', 'productOrders.product'],
    });
    return orders.map((order) => {
      const cost = order.productOrders
        .map((po) => po.numberProducts * po.product.cost)
        .reduce((acc, curr) => acc + curr);
      return { ...order, cost };
    });
  }

  async findOne(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id);
  }

  async remove(id: string): Promise<boolean> {
    return !!this.ordersRepository.delete(id);
  }
}
