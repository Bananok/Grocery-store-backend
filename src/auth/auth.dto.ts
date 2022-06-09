import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {
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

export class ResponseDto {
  @ApiProperty({ example: 'token' })
  @IsNotEmpty()
  @IsString()
  jwtToken: string;

  @ApiProperty({ example: 'login' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class SignInDto {
  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: '12345678' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
