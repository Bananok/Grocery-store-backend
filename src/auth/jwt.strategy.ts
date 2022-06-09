import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userServise: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '$ecret',
      ignoreExpiration: false,
    } as StrategyOptions);
  }
  async validate(payload: { sub: string }): Promise<User> {
    const id = payload.sub;
    return this.userServise.getOneOrFail(id);
  }
}
