import { Injectable } from '@nestjs/common';
import { CreateUser3Dto } from './dto/create-user3.dto';
import { UpdateUser3Dto } from './dto/update-user3.dto';

@Injectable()
export class User3Service {
  create(createUser3Dto: CreateUser3Dto) {
    return 'This action adds a new user3';
  }

  findAll() {
    return `This action returns all user3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user3`;
  }

  update(id: number, updateUser3Dto: UpdateUser3Dto) {
    return `This action updates a #${id} user3`;
  }

  remove(id: number) {
    return `This action removes a #${id} user3`;
  }
}
