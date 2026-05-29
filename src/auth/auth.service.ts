import { Injectable } from '@nestjs/common';
import { JWTSignPayload } from './model/JWTSignPayload';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateAccessToken(request: JWTSignPayload) {
    const secret = this.configService.get<string>('JWT_SECRET_KEY');
    return this.jwtService.sign(request, {
      secret: secret,
      expiresIn: '7d',
    });
  }
}
