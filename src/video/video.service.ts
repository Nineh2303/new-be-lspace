import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MOCK_VIDEOS, IVideoItem } from '../mock-data';

@Injectable()
export class VideoService {
  private inMemoryVideos: IVideoItem[] = [...MOCK_VIDEOS];

  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async findAll(): Promise<IVideoItem[]> {
    if (this.prisma.getIsConnected()) {
      try {
        return (await this.prisma.videoItem.findMany()) as unknown as IVideoItem[];
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
    return this.inMemoryVideos;
  }

  async findOne(id: number): Promise<IVideoItem | null> {
    if (this.prisma.getIsConnected()) {
      try {
        const item = await this.prisma.videoItem.findUnique({ where: { id } });
        return item as unknown as IVideoItem | null;
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
    return this.inMemoryVideos.find((v) => v.id === id) || null;
  }

  async create(data: Partial<IVideoItem>): Promise<IVideoItem> {
    const newItem: IVideoItem = {
      id: data.id || Math.max(...this.inMemoryVideos.map((v) => v.id), 0) + 1,
      category: data.category || 'Tự do',
      thumbnail:
        data.thumbnail ||
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&w=800&q=80',
      title: data.title || 'Video tiêu đề trống',
      duration: data.duration || '10:00',
      instructor: data.instructor || 'Hệ thống',
      views: data.views || '0 lượt xem',
      videoUrl: data.videoUrl,
    };

    if (this.prisma.getIsConnected()) {
      try {
        const created = await this.prisma.videoItem.create({
          data: {
            category: newItem.category,
            thumbnail: newItem.thumbnail,
            title: newItem.title,
            duration: newItem.duration,
            instructor: newItem.instructor,
            views: newItem.views,
            videoUrl: newItem.videoUrl,
          },
        });
        return created as unknown as IVideoItem;
      } catch (err) {
        console.error('Prisma create failed, falling back to memory:', err);
      }
    }

    this.inMemoryVideos.push(newItem);
    return newItem;
  }

  async update(
    id: number,
    data: Partial<IVideoItem>,
  ): Promise<IVideoItem | null> {
    if (this.prisma.getIsConnected()) {
      try {
        const updated = await this.prisma.videoItem.update({
          where: { id },
          data: {
            category: data.category,
            thumbnail: data.thumbnail,
            title: data.title,
            duration: data.duration,
            instructor: data.instructor,
            views: data.views,
            videoUrl: data.videoUrl,
          },
        });
        return updated as unknown as IVideoItem | null;
      } catch (err) {
        console.error('Prisma update failed, falling back to memory:', err);
      }
    }

    const idx = this.inMemoryVideos.findIndex((v) => v.id === id);
    if (idx !== -1) {
      this.inMemoryVideos[idx] = { ...this.inMemoryVideos[idx], ...data };
      return this.inMemoryVideos[idx];
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    if (this.prisma.getIsConnected()) {
      try {
        await this.prisma.videoItem.delete({ where: { id } });
        return true;
      } catch (err) {
        console.error('Prisma delete failed, falling back to memory:', err);
      }
    }

    const idx = this.inMemoryVideos.findIndex((v) => v.id === id);
    if (idx !== -1) {
      this.inMemoryVideos.splice(idx, 1);
      return true;
    }
    return false;
  }
}
