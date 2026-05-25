import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { IDayActivity } from '../mock-data';

@Controller('api/activities')
export class ActivityController {
  constructor(
    @Inject(ActivityService) private readonly activityService: ActivityService,
  ) {}

  @Get()
  async getAllActivities() {
    return this.activityService.findAll();
  }

  @Get(':id')
  async getActivityById(@Param('id', ParseIntPipe) id: number) {
    const item = await this.activityService.findOne(id);
    if (!item) {
      throw new NotFoundException(`Activity item with ID ${id} not found`);
    }
    return item;
  }

  @Post()
  async createActivity(@Body() body: Partial<IDayActivity>) {
    return this.activityService.create(body);
  }

  @Put(':id')
  async updateActivity(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<IDayActivity>,
  ) {
    const updated = await this.activityService.update(id, body);
    if (!updated) {
      throw new NotFoundException(`Activity item with ID ${id} not found`);
    }
    return updated;
  }

  @Delete(':id')
  async deleteActivity(@Param('id', ParseIntPipe) id: number) {
    const success = await this.activityService.delete(id);
    if (!success) {
      throw new NotFoundException(`Activity item with ID ${id} not found`);
    }
    return { success: true, message: 'Activity item deleted successfully' };
  }
}
