import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SignInDto, SignUpDto, ResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: SignUpDto })
  @Post('auth/signUp')
  async signUp(@Body() body: SignUpDto): Promise<ResponseDto> {
    return this.authService.signUp(body);
  }

  @ApiBody({ type: SignInDto })
  @Post('auth/signIn')
  async signIn(@Body() body: SignInDto): Promise<ResponseDto> {
    return this.authService.signIn(body);
  }
}
