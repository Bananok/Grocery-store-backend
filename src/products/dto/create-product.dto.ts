import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsNumber()
  productType: number;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 12345678 })
  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  img: string;
}
