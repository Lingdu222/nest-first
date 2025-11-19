import { Controller, Get } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('/class')
export class ClassController {
  constructor(private readonly ClassService: ClassService) { }

  @Get()
  getHello(): string {
    return this.ClassService.getHello();
  }
}
