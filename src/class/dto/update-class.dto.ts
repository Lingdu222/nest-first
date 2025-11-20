// 更新课程DTO参数校验
import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from './create-class.dto';

/**
 * UpdateClassDto 继承自 CreateClassDto，使用 PartialType 使所有字段变为可选
 * 这样更新时只需要传递需要更新的字段即可
 */
export class UpdateClassDto extends PartialType(CreateClassDto) {
}

