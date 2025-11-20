import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User3Service } from './user3.service';
import { CreateUser3Dto } from './dto/create-user3.dto';
import { UpdateUser3Dto } from './dto/update-user3.dto';

@Controller('user3')
export class User3Controller {
  constructor(private readonly user3Service: User3Service) {}

  @Post()
  create(@Body() createUser3Dto: CreateUser3Dto) {
    return this.user3Service.create(createUser3Dto);
  }

  @Get()
  findAll() {
    return this.user3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser3Dto: UpdateUser3Dto) {
    return this.user3Service.update(+id, updateUser3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user3Service.remove(+id);
  }
}
