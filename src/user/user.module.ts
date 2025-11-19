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




@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
