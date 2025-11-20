// 创建课程DTO参数校验
import { IsNotEmpty, IsString, IsNumber, IsUrl, Min } from 'class-validator';

export class CreateClassDto {
  @IsString({ message: '课程ID必须是字符串' })
  @IsNotEmpty({ message: '课程ID不能为空' })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
  }, { message: '课程ID必须是数字' })
  readonly id: string;
  /**
   * 课程标题
   * 必填，必须是字符串且不能为空
   */
  @IsString({ message: '课程标题必须是字符串' })
  @IsNotEmpty({ message: '课程标题不能为空' })
  readonly title: string;

  /**
   * 课程图片URL
   * 必填，必须是有效的URL格式
   */
  @IsString({ message: '课程图片URL必须是字符串' })
  @IsNotEmpty({ message: '课程图片URL不能为空' })
  @IsUrl({}, { message: '课程图片URL格式不正确' })
  readonly class_img: string;

  /**
   * 课程价格
   * 必填，必须是数字且大于等于0
   */
  @IsNumber({}, { message: '课程价格必须是数字' })
  @IsNotEmpty({ message: '课程价格不能为空' })
  @Min(0, { message: '课程价格不能小于0' })
  readonly price: number;
}

