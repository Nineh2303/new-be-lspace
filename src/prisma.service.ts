import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/index.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private isConnected = false;

  constructor() {
    super({
      datasources: {
        db: {
          url:
            process.env.DATABASE_URL ||
            'postgresql://placeholder:placeholder@localhost:5432/placeholder',
        },
      },
    });
  }

  async onModuleInit() {
    if (!process.env.DATABASE_URL) {
      console.warn(
        'DATABASE_URL environment variable is missing. Prisma will operate in mock-fallback mode.',
      );
      return;
    }
    try {
      await this.$connect();
      this.isConnected = true;
      console.log('Successfully connected to PostgreSQL via Prisma!');
    } catch (error) {
      console.error(
        'Failed to connect to PostgreSQL. Operating in mock-fallback mode. Error:',
        (error as Error).message,
      );
      this.isConnected = false;
    }
  }

  async onModuleDestroy() {
    if (this.isConnected) {
      await this.$disconnect();
    }
  }

  getIsConnected(): boolean {
    return this.isConnected;
  }
}
