import {
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LoginTicket, OAuth2Client, TokenPayload } from 'google-auth-library';
import { IGoogleLoginRequest } from './models/user.request';
import { GoogleLoginResponse } from './models/user.response';
import { ApiResponse } from '../utils/ApiResponse';
import { AuthService } from '../auth/auth.service';
import { JWTSignPayload } from '../auth/model/JWTSignPayload';


@Injectable()
class UserService {
  private readonly client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(AuthService) private readonly auth: AuthService ,
  ) {}

  async googleLogin(
    request: IGoogleLoginRequest,
  ): Promise<ApiResponse<GoogleLoginResponse>> {
    let payload: TokenPayload | undefined;
    try {
      const ticket: LoginTicket = await this.client.verifyIdToken({
        idToken: request.credential,
      });
      console.log(ticket);
      payload = ticket.getPayload();
    } catch (error) {
      console.error('Google token verification failed:', error);
      throw new UnauthorizedException('Invalid Google credential');
    }
    if (!payload?.email || !payload.name) {
      throw new UnauthorizedException('Google account data is invalid');
    }
    if (!payload.email_verified) {
      throw new UnauthorizedException('Google email is not verified');
    }
    try {
      let user = await this.prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });
      user ??= await this.prisma.user.create({
        data: {
          email: payload.email,
          name: payload.name,
          avatarUrl: payload.picture,
          googleId: payload.sub,
          given_name: payload.given_name,
          family_name: payload.family_name,
        },
      });
      /**
       * TODO:
       * Generate JWT token here
       */
      const accessToken = this.auth.generateAccessToken({
        email: user.email,
        name: user.name,
      } as JWTSignPayload);

      return ApiResponse.success(
        new GoogleLoginResponse(
          user.name,
          user.email,
          user.avatarUrl ?? undefined,
          user.given_name ?? undefined,
          user.family_name ?? undefined,
          accessToken,
        ),
      );
    } catch (error) {
      console.error('Database operation failed:', error);

      throw new InternalServerErrorException('Login failed');
    }
  }

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
