// 加密工具类
// MD5加密
import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InternalTools {
  md5(str: string): string {
    return crypto.createHash('md5').update(str).digest('hex');
  }
}
