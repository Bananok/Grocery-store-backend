import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateProductOrderDto } from './create-product-order.dto';

export class CreateOrderDto {
  @ApiProperty({ type: CreateProductOrderDto, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => CreateProductOrderDto)
  products: CreateProductOrderDto[];
}
