import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService, @InjectRepository(User) private readonly userRepository: Repository<User>) { }



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
