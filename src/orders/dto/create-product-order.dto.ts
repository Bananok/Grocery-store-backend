import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsUUID, IsNumber } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';

export class CreateProductOrderDto {
  @ApiProperty({ example: '0d0e5c3a-c181-4a47-bffc-127df95a2616' })
  @IsUUID()
  productId: Product['id'];

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsDefined()
  numberProducts: number;
}
