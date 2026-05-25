import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MOCK_LEADERBOARD, ILeaderboardItem } from '../mock-data';

@Injectable()
export class LeaderboardService {
  private inMemoryLeaderboard: ILeaderboardItem[] = [...MOCK_LEADERBOARD];

  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async findAll(): Promise<ILeaderboardItem[]> {
    if (this.prisma.getIsConnected()) {
      try {
        return await this.prisma.leaderboardItem.findMany();
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
    return this.inMemoryLeaderboard;
  }

  async findOne(id: number): Promise<ILeaderboardItem | null> {
    if (this.prisma.getIsConnected()) {
      try {
        const item = await this.prisma.leaderboardItem.findUnique({
          where: { id },
        });
        return item;
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
    return this.inMemoryLeaderboard[id - 1] || null;
  }

  async create(data: Partial<ILeaderboardItem>): Promise<ILeaderboardItem> {
    const newItem: ILeaderboardItem = {
      rank: data.rank || this.inMemoryLeaderboard.length + 1,
      init: data.init || 'HV',
      name: data.name || 'Học viên mới',
      type: data.type || 'Chăm chỉ',
      points: data.points || '0',
    };

    if (this.prisma.getIsConnected()) {
      try {
        const created = await this.prisma.leaderboardItem.create({
          data: {
            rank: newItem.rank,
            init: newItem.init,
            name: newItem.name,
            type: newItem.type,
            points: newItem.points,
          },
        });
        return created;
      } catch (err) {
        console.error('Prisma create failed, falling back to memory:', err);
      }
    }

    this.inMemoryLeaderboard.push(newItem);
    return newItem;
  }

  async update(
    id: number,
    data: Partial<ILeaderboardItem>,
  ): Promise<ILeaderboardItem | null> {
    if (this.prisma.getIsConnected()) {
      try {
        const updated = await this.prisma.leaderboardItem.update({
          where: { id },
          data: {
            rank: data.rank,
            init: data.init,
            name: data.name,
            type: data.type,
            points: data.points,
          },
        });
        return updated;
      } catch (err) {
        console.error('Prisma update failed, falling back to memory:', err);
      }
    }

    const idx = id - 1;
    if (idx >= 0 && idx < this.inMemoryLeaderboard.length) {
      this.inMemoryLeaderboard[idx] = {
        ...this.inMemoryLeaderboard[idx],
        ...data,
      };
      return this.inMemoryLeaderboard[idx];
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    if (this.prisma.getIsConnected()) {
      try {
        await this.prisma.leaderboardItem.delete({ where: { id } });
        return true;
      } catch (err) {
        console.error('Prisma delete failed, falling back to memory:', err);
      }
    }

    const idx = id - 1;
    if (idx >= 0 && idx < this.inMemoryLeaderboard.length) {
      this.inMemoryLeaderboard.splice(idx, 1);
      return true;
    }
    return false;
  }
}
