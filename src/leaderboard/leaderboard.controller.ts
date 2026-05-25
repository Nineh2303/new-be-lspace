import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { ILeaderboardItem } from '../mock-data';

@Controller('api/leaderboard')
export class LeaderboardController {
  constructor(
    @Inject(LeaderboardService)
    private readonly leaderboardService: LeaderboardService,
  ) {}

  @Get()
  async getAllLeaderboard() {
    return this.leaderboardService.findAll();
  }

  @Get(':id')
  async getLeaderboardById(@Param('id', ParseIntPipe) id: number) {
    const item = await this.leaderboardService.findOne(id);
    if (!item) {
      throw new NotFoundException(`Leaderboard item with ID ${id} not found`);
    }
    return item;
  }

  @Post()
  async createLeaderboard(@Body() body: Partial<ILeaderboardItem>) {
    return this.leaderboardService.create(body);
  }

  @Put(':id')
  async updateLeaderboard(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<ILeaderboardItem>,
  ) {
    const updated = await this.leaderboardService.update(id, body);
    if (!updated) {
      throw new NotFoundException(`Leaderboard item with ID ${id} not found`);
    }
    return updated;
  }

  @Delete(':id')
  async deleteLeaderboard(@Param('id', ParseIntPipe) id: number) {
    const success = await this.leaderboardService.delete(id);
    if (!success) {
      throw new NotFoundException(`Leaderboard item with ID ${id} not found`);
    }
    return { success: true, message: 'Leaderboard item deleted successfully' };
  }
}
