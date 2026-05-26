import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import UserService from './user.service';
import { PrismaService } from '../prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [
    JwtModule.register({
      // secret: process.env.JWT_SECRET,
      secret:
        'd5qznc8zpew4ze3ex8ln7s8ehdrg45cqutxzbn5pojxbkho1davryf69r8voi4==',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, AuthService, JwtService],
  exports: [UserService],
})
class UserModule {}

export default UserModule;
