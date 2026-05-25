import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import UserService from './user.service';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret:
        process.env.JWT_SECRET ||
        'langspace_super_secret_session_token_key_2026',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
class UserModule {}

export default UserModule;
