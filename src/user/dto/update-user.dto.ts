// 更新用户DTO参数校验
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, IsUrl } from 'class-validator';

/**
 * UpdateUserDto 继承自 CreateUserDto，使用 PartialType 使所有字段变为可选
 * 这样更新时只需要传递需要更新的字段即可
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * 头像URL（可选）
   * 如果提供，必须是有效的URL格式
   */
  @IsOptional()
  @IsString({ message: '头像URL必须是字符串' })
  @IsUrl({}, { message: '头像URL格式不正确' })
  readonly head_img?: string;
}

