import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MOCK_ACTIVITY, IDayActivity } from '../mock-data';

@Injectable()
export class ActivityService {
  private inMemoryActivity: IDayActivity[] = [...MOCK_ACTIVITY];

  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async findAll(): Promise<IDayActivity[]> {
    if (this.prisma.getIsConnected()) {
      try {
        return await this.prisma.dayActivity.findMany();
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
    return this.inMemoryActivity;
  }

  async findOne(id: number): Promise<IDayActivity | null> {
    if (this.prisma.getIsConnected()) {
      try {
        const item = await this.prisma.dayActivity.findUnique({
          where: { id },
        });
        return item;
      } catch (err) {
        console.error('Prisma query failed, falling back to memory:', err);
      }
    }
    return this.inMemoryActivity[id - 1] || null;
  }

  async create(data: Partial<IDayActivity>): Promise<IDayActivity> {
    const newItem: IDayActivity = {
      day: data.day || 'T2',
      active: data.active || [false, false, false, false, false],
    };

    if (this.prisma.getIsConnected()) {
      try {
        const created = await this.prisma.dayActivity.create({
          data: {
            day: newItem.day,
            active: newItem.active,
          },
        });
        return created;
      } catch (err) {
        console.error('Prisma create failed, falling back to memory:', err);
      }
    }

    this.inMemoryActivity.push(newItem);
    return newItem;
  }

  async update(
    id: number,
    data: Partial<IDayActivity>,
  ): Promise<IDayActivity | null> {
    if (this.prisma.getIsConnected()) {
      try {
        const updated = await this.prisma.dayActivity.update({
          where: { id },
          data: {
            day: data.day,
            active: data.active,
          },
        });
        return updated;
      } catch (err) {
        console.error('Prisma update failed, falling back to memory:', err);
      }
    }

    const idx = id - 1;
    if (idx >= 0 && idx < this.inMemoryActivity.length) {
      this.inMemoryActivity[idx] = { ...this.inMemoryActivity[idx], ...data };
      return this.inMemoryActivity[idx];
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    if (this.prisma.getIsConnected()) {
      try {
        await this.prisma.dayActivity.delete({ where: { id } });
        return true;
      } catch (err) {
        console.error('Prisma delete failed, falling back to memory:', err);
      }
    }

    const idx = id - 1;
    if (idx >= 0 && idx < this.inMemoryActivity.length) {
      this.inMemoryActivity.splice(idx, 1);
      return true;
    }
    return false;
  }
}
