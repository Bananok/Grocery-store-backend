import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto, ResponseDto } from './auth.dto';
import { hash, compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersServise: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDto): Promise<ResponseDto> {
    const oldUser = await this.usersServise.getOne(dto.login);
    if (oldUser) {
      throw new ForbiddenException('Логин занят');
    }
    dto.password = await hash(dto.password, 13);
    const user = await this.usersServise.create(dto);
    const jwtToken = await this.jwtService.signAsync({ sub: user.id });
    return { jwtToken, login: user.login, name: user.name };
  }
  async signIn(dto: SignInDto): Promise<ResponseDto> {
    const user = await this.usersServise.getOne(dto.login);
    if (!user) {
      throw new ForbiddenException('Пользователя с таким логином нет');
    }
    const isCorrectPassword = await compare(dto.password, user.password);
    if (!isCorrectPassword) {
      throw new ForbiddenException('Пароль неверный');
    }
    const jwtToken = await this.jwtService.signAsync({ sub: user.id });
    return { jwtToken, login: user.login, name: user.name };
  }
}
