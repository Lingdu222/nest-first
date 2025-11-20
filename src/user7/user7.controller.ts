import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User7Service } from './user7.service';
import { CreateUser7Dto } from './dto/create-user7.dto';
import { UpdateUser7Dto } from './dto/update-user7.dto';

@Controller('user7')
export class User7Controller {
  constructor(private readonly user7Service: User7Service) {}

  @Post()
  create(@Body() createUser7Dto: CreateUser7Dto) {
    return this.user7Service.create(createUser7Dto);
  }

  @Get()
  findAll() {
    return this.user7Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user7Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser7Dto: UpdateUser7Dto) {
    return this.user7Service.update(+id, updateUser7Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user7Service.remove(+id);
  }
}
