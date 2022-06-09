import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
