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
import { VideoService } from './video.service';
import { IVideoItem } from '../mock-data';

@Controller('api/videos')
export class VideoController {
  constructor(
    @Inject(VideoService) private readonly videoService: VideoService,
  ) {}

  @Get()
  async getAllVideos() {
    return this.videoService.findAll();
  }

  @Get(':id')
  async getVideoById(@Param('id', ParseIntPipe) id: number) {
    const video = await this.videoService.findOne(id);
    if (!video) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return video;
  }

  @Post()
  async createVideo(@Body() body: Partial<IVideoItem>) {
    return this.videoService.create(body);
  }

  @Put(':id')
  async updateVideo(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<IVideoItem>,
  ) {
    const updated = await this.videoService.update(id, body);
    if (!updated) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return updated;
  }

  @Delete(':id')
  async deleteVideo(@Param('id', ParseIntPipe) id: number) {
    const success = await this.videoService.delete(id);
    if (!success) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return { success: true, message: 'Video deleted successfully' };
  }
}
