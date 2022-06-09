import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DB_URL } from './config';
import { User } from './users/user.entity';
import { UsersModule } from './users/user.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import Order from './orders/entities/order.entity';
import { Product } from './products/entities/product.entity';
import { ProductOrder } from './orders/entities/products-order.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: DB_URL,
      logging: false,
      entities: [User, Order, Product, ProductOrder],
      synchronize: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
