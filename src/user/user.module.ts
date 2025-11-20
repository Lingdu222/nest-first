import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';


// 引入TypeOrm模块
// 引入User实体
// User实体用于TypeOrm进行数据库操作
// 所以需要在模块中引入TypeOrmModule.forFeature方法，并传入User实体
// 这样UserService中就可以通过@InjectRepository(User)注入UserRepository进行数据库操作

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
// 引入JwtModule
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../config';
// 引入InternalTools
import { InternalTools } from '../utis/internalTools';



@Module({
  // 注册JwtModule
  // 这样在UserService中就可以通过@Inject(JwtService)注入JwtService进行JWT操作
  // 注入typeOrmModule，这样在UserService中就可以通过@InjectRepository(User)注入UserRepository进行数据库操作

  imports: [TypeOrmModule.forFeature([User]), JwtModule.register(jwtConfig)],
  controllers: [UserController],
  providers: [UserService, InternalTools],
})
export class UserModule { }
