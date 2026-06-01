import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ApiResponse } from '../utils/ApiResponse';
import { AuthService } from '../auth/auth.service';
import { IUserRegisterResponse } from './models/ response/RegisterUserReponse';
import * as bcrypt from 'bcrypt';
import { IRegisterUserRequest } from './models/request/RegisterUserRequest';
import { BusinessException } from '../common/BusinessException';

@Injectable()
class UserService {
  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(AuthService) private readonly auth: AuthService,
  ) {}

  async register(payload: IRegisterUserRequest) {
    try {
      let user = await this.prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });
      if (user) {
        throw new BusinessException('Email already exists');
      }
      const hashedPassword = await bcrypt.hash(payload.password, 10);
      user = await this.prisma.user.create({
        data: {
          fullName: payload.fullName,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          schoolGrade: payload.schoolGrade,
          schoolName: payload.schoolName,
          password: hashedPassword,
        },
      });

      const accessToken = this.auth.generateAccessToken({
        email: user.email,
        name: user.fullName,
      });

      const response: IUserRegisterResponse = {
        email: user.email,
        fullName: user.fullName,
        schoolName: user.schoolName,
        phoneNumber: user.phoneNumber,
        schoolGrade: user.schoolGrade,
        accessToken: accessToken,
      };
      return ApiResponse.success(response);
    } catch (error) {
      console.error('Database operation failed:', error);

      throw new InternalServerErrorException('Login failed');
    }
  }

  // async getCurrentUser(request: any) {
  //   const { email } = request;
  //   try {
  //     const user = await this.prisma.user.findUnique({
  //       where: {
  //         email: email,
  //       },
  //     });
  //     return ApiResponse.success({
  //       email: user?.email,
  //       username: user?.name,
  //       given_name: user?.given_name,
  //       family_name: user?.family_name,
  //       image: user?.avatarUrl,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     throw new UnauthorizedException('Google account data is invalid');
  //   }
  // }

  // async findAll(): Promise<IUser[]> {
  //   if (this.prisma.getIsConnected()) {
  //     try {
  //       return (await this.prisma.user.findMany()) as unknown as IUser[];
  //     } catch (err) {
  //       console.error('Prisma query failed, falling back to memory:', err);
  //     }
  //   }
  //   return this.inMemoryUsers;
  // }
  //
  // async findOne(id: string): Promise<IUser | null> {
  //   if (this.prisma.getIsConnected()) {
  //     try {
  //       const user = await this.prisma.user.findUnique({ where: { id } });
  //       return user as unknown as IUser | null;
  //     } catch (err) {
  //       console.error('Prisma query failed, falling back to memory:', err);
  //     }
  //   }
  //   return this.inMemoryUsers.find((u) => u.id === id) || null;
  // }
  //
  // async findByEmail(email: string): Promise<IUser | null> {
  //   if (this.prisma.getIsConnected()) {
  //     try {
  //       const user = await this.prisma.user.findUnique({ where: { email } });
  //       return user as unknown as IUser | null;
  //     } catch (err) {
  //       console.error('Prisma query failed, falling back to memory:', err);
  //     }
  //   }
  //   return this.inMemoryUsers.find((u) => u.email === email) || null;
  // }
  //
  // async create(data: Partial<IUser>): Promise<IUser> {
  //   const newUser: IUser = {
  //     id: data.id || Math.random().toString(36).substring(7),
  //     email: data.email || 'unknown@gmail.com',
  //     name: data.name || 'Học viên',
  //     picture: data.picture,
  //     googleId: data.googleId,
  //   };
  //
  //   if (this.prisma.getIsConnected()) {
  //     try {
  //       const created = await this.prisma.user.create({
  //         data: {
  //           email: newUser.email,
  //           name: newUser.name,
  //           picture: newUser.picture,
  //           googleId: newUser.googleId,
  //         },
  //       });
  //       return created as unknown as IUser;
  //     } catch (err) {
  //       console.error('Prisma create failed, falling back to memory:', err);
  //     }
  //   }
  //
  //   this.inMemoryUsers.push(newUser);
  //   return newUser;
  // }
  //
  // async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
  //   if (this.prisma.getIsConnected()) {
  //     try {
  //       const updated = await this.prisma.user.update({
  //         where: { id },
  //         data: {
  //           email: data.email,
  //           name: data.name,
  //           picture: data.picture,
  //           googleId: data.googleId,
  //         },
  //       });
  //       return updated as unknown as IUser | null;
  //     } catch (err) {
  //       console.error('Prisma update failed, falling back to memory:', err);
  //     }
  //   }
  //
  //   const idx = this.inMemoryUsers.findIndex((u) => u.id === id);
  //   if (idx !== -1) {
  //     this.inMemoryUsers[idx] = { ...this.inMemoryUsers[idx], ...data };
  //     return this.inMemoryUsers[idx];
  //   }
  //   return null;
  // }
  //
  // async delete(id: string): Promise<boolean> {
  //   if (this.prisma.getIsConnected()) {
  //     try {
  //       await this.prisma.user.delete({ where: { id } });
  //       return true;
  //     } catch (err) {
  //       console.error('Prisma delete failed, falling back to memory:', err);
  //     }
  //   }
  //
  //   const idx = this.inMemoryUsers.findIndex((u) => u.id === id);
  //   if (idx !== -1) {
  //     this.inMemoryUsers.splice(idx, 1);
  //     return true;
  //   }
  //   return false;
  // }
}

export default UserService;
