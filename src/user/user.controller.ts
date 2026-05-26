import { Body, Controller, Inject, Post, Req, UseGuards } from '@nestjs/common';
import UserService from './user.service';
import { JwtService } from '@nestjs/jwt';
import type { IGoogleLoginRequest } from './models/user.request';
import { GoogleLoginResponse } from './models/user.response';
import { ApiResponse } from '../utils/ApiResponse';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
export class UserController {
  constructor(
    @Inject(UserService) private readonly userService: UserService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {}

  @Post('google-login')
  async googleLogin(
    @Body() payload: IGoogleLoginRequest,
  ): Promise<ApiResponse<GoogleLoginResponse>> {
    return this.userService.googleLogin(payload);
    // Exchange code for ID Token
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('current-user')
  getUser(@Req() req) {
    return req.user;
  }
  // @Get()
  // async getAllUsers() {
  //   return this.userService.findAll();
  // }
  //
  // @Get(':id')
  // async getUserById(@Param('id') id: string) {
  //   const user = await this.userService.findOne(id);
  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return user;
  // }
  //
  // @Post()
  // async createUser(@Body() body: Partial<IUser>) {
  //   return this.userService.create(body);
  // }
  //
  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() body: Partial<IUser>) {
  //   const updated = await this.userService.update(id, body);
  //   if (!updated) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return updated;
  // }
  //
  // @Delete(':id')
  // async deleteUser(@Param('id') id: string) {
  //   const success = await this.userService.delete(id);
  //   if (!success) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return { success: true, message: 'User deleted successfully' };
  // }
}
