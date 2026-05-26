import { Injectable } from '@nestjs/common';
import { JWTSignPayload } from './model/JWTSignPayload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(request: JWTSignPayload) {
    return this.jwtService.sign(request);
  }
}
