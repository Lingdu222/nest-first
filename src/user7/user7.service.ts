import { Injectable } from '@nestjs/common';
import { CreateUser7Dto } from './dto/create-user7.dto';
import { UpdateUser7Dto } from './dto/update-user7.dto';

@Injectable()
export class User7Service {
  create(createUser7Dto: CreateUser7Dto) {
    return 'This action adds a new user7';
  }

  findAll() {
    return `This action returns all user7`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user7`;
  }

  update(id: number, updateUser7Dto: UpdateUser7Dto) {
    return `This action updates a #${id} user7`;
  }

  remove(id: number) {
    return `This action removes a #${id} user7`;
  }
}
