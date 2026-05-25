import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import UserModule from './user/user.module';
import { VideoModule } from './video/video.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ActivityModule } from './activity/activity.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import CryptoInterceptor from './config/CryptoInterceptor';

@Module({
  imports: [
    UserModule,
    VideoModule,
    LeaderboardModule,
    ActivityModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CryptoInterceptor,
    },
  ],
})
export class AppModule {}
