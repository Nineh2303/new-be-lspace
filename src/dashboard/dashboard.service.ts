import { Injectable, Inject } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { LeaderboardService } from '../leaderboard/leaderboard.service';
import { ActivityService } from '../activity/activity.service';

@Injectable()
export class DashboardService {
  constructor(
    @Inject(VideoService) private readonly videoService: VideoService,
    @Inject(LeaderboardService)
    private readonly leaderboardService: LeaderboardService,
    @Inject(ActivityService) private readonly activityService: ActivityService,
  ) {}

  async getDashboardData() {
    const [videos, leaderboard, activity] = await Promise.all([
      this.videoService.findAll(),
      this.leaderboardService.findAll(),
      this.activityService.findAll(),
    ]);

    return {
      activity,
      leaderboard,
      videos,
    };
  }
}
