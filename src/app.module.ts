import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import UserModule from './user/user.module';
import { VideoModule } from './video/video.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ActivityModule } from './activity/activity.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import CryptoInterceptor from './interceptors/crypto.interceptor';

dotenv.config();

@Module({
  imports: [
    UserModule,
    VideoModule,
    LeaderboardModule,
    ActivityModule,
    DashboardModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CryptoInterceptor,
    },
  ],
})
export class AppModule {}
