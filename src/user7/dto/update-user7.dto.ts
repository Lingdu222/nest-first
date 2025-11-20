import { PartialType } from '@nestjs/mapped-types';
import { CreateUser7Dto } from './create-user7.dto';

export class UpdateUser7Dto extends PartialType(CreateUser7Dto) {}
