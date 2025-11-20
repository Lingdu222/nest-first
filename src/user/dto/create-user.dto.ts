 // 参数DTO校验
 import { IsNotEmpty, IsString, MinLength,IsOptional,IsUrl } from 'class-validator';

 export class CreateUserDto {
  @IsString({ message: '用户名必须是字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly userName: string;

  @IsString({ message: '密码必须是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  // @MinLength(6, { message: '密码长度不能少于6位' })
  readonly password: string;
  // 头像可选
  @IsOptional()
  @IsString({ message: '头像必须是字符串' })
  @IsUrl({}, { message: '头像URL格式不正确' })
  readonly head_img?: string;
 }