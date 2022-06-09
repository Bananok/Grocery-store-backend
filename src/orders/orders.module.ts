import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import Order from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrder } from './entities/products-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, ProductOrder])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
