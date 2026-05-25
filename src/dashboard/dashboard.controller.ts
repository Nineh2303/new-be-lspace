import { Controller, Get, Inject, Post } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiResponse } from '../utils/ApiResponse';

@Controller('api')
export class DashboardController {
  constructor(
    @Inject(DashboardService)
    private readonly dashboardService: DashboardService,
  ) {}

  @Post('dashboard')
  getDashboard() {
    return ApiResponse.success(this.dashboardService.getDashboardData());
  }

  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}
