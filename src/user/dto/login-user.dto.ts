// 登录用户DTO参数校验
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginUserDto {
  /**
   * 用户名
   * 必填，必须是字符串且不能为空
   */
  @IsString({ message: '用户名必须是字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly userName: string;

  /**
   * 密码
   * 必填，必须是字符串且长度至少6位
   */
  @IsString({ message: '密码必须是字符串1' })
  @IsNotEmpty({ message: '密码不能为空2' })
  // @MinLength(6, { message: '密码长度不能少于6位' })
  readonly password: string;
}

