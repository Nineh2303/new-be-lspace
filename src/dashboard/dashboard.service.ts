import { Injectable, Inject } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { LeaderboardService } from '../leaderboard/leaderboard.service';
import { ActivityService } from '../activity/activity.service';
import { PrismaService } from '../prisma.service';
import { ISchoolItem } from './model/response/Schooltem';
import { ApiResponse } from '../utils/ApiResponse';

@Injectable()
export class DashboardService {
  constructor(
    @Inject(VideoService) private readonly videoService: VideoService,
    @Inject(LeaderboardService)
    private readonly leaderboardService: LeaderboardService,
    @Inject(ActivityService) private readonly activityService: ActivityService,
    @Inject(PrismaService) private readonly prisma: PrismaService,
  ) {}

  async getSchools() {
    if (this.prisma.getIsConnected()) {
      try {
        const schools: ISchoolItem[] = await this.prisma.school.findMany();
        return ApiResponse.success(schools);
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
  }

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
