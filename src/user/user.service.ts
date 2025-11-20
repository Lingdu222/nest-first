import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InternalTools } from 'src/utis/internalTools';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException } from '@nestjs/common';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly internalTools: InternalTools,
    private readonly jwtService: JwtService
  ) { }
  getHello(): string {  
    return 'Hello i am user class!';
  }
  async register(createUserDto: CreateUserDto) {
    // 是否注册过
    const user = await this.userRepository.findOne({ where: { userName: createUserDto.userName } });
    if (user) {
      throw new BadRequestException('用户已注册');
    }
    // 注册过了，看看密码是否正确
    const password = this.internalTools.md5(createUserDto.password);
    // if (password !== user.password) {
    //   throw new BadRequestException('密码错误');
    // }
    const user_data = await this.userRepository.save({
     
      userName: createUserDto.userName, 
      password: password,
      head_img: createUserDto.head_img || '',
    } as unknown as User);
    return {
      message: '注册成功',
      data: {
        token: this.jwtService.sign({ userId: user_data.id }),
      }
    }
  }
  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({ where: { userName: loginUserDto.userName } });
    if (!user) {
      throw new BadRequestException('用户不存在');
    }
    const password = this.internalTools.md5(loginUserDto.password);
    if (password !== user.password) {
      throw new BadRequestException('密码错误');
    }
    // 登录成功，返回 token 和用户信息
    return {
      message: '登录成功',
      data: {
        token: this.jwtService.sign({ userId: user.id }),
        // user: {
        //   id: user.id,
        //   userName: user.userName,
        //   head_img: user.head_img,
        // },
      },
    };
  }
}
