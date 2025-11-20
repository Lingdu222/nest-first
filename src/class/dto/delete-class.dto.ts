// 删除课程DTO参数校验
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class DeleteClassDto {
  /**
   * 课程ID
   * 必填，必须是正整数
   */
  @IsNumber({}, { message: '课程ID必须是数字' })
  @IsNotEmpty({ message: '课程ID不能为空' })
  @IsPositive({ message: '课程ID必须是正整数' })
  readonly id: number;
}

