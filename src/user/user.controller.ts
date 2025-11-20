import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService, @InjectRepository(User) private readonly userRepository: Repository<User>) { }

  
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.UserService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.UserService.login(loginUserDto);
  }


  @Get()
  getHello(): string {

    // this.userRepository.save({ userName: 'A', password: 123, head_img: 'https://hellorfimg.zcool.cn/provider_image/large/hi2246794331.jpg?x-image-process=image/format,webp' }); // 示例：使用userRepository进行数据库操作
    // 删除
    // this.userRepository.delete({ userName: 'A' });
    // 修改
    // this.userRepository.update(3, { userName: 'B' }); 
    // 查询
    // this.userRepository.find(); 
    return this.UserService.getHello();
  }
}
