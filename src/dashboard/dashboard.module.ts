import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { VideoModule } from '../video/video.module';
import { LeaderboardModule } from '../leaderboard/leaderboard.module';
import { ActivityModule } from '../activity/activity.module';

@Module({
  imports: [VideoModule, LeaderboardModule, ActivityModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
