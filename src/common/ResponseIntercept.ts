// 请求响应拦截器

/**
 * 拦截器 用于统一处理请求响应
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Injectable 装饰器将类标记为可注入的服务
@Injectable()
export class ResponseIntercept implements NestInterceptor {
  // NestInterceptor  是一个接口，定义了拦截器的结构
  // intercept 方法用于拦截请求和响应
  // context 参数提供有关当前请求的上下文信息
  // next 参数是一个 CallHandler 对象，表示下一个处理程序
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {// 返回的格式
    // 通过 next.handle() 获取下一个处理程序的响应流
    // 使用 RxJS 的 map 操作符对响应数据进行转换
    // 最终返回一个新的响应对象，包含自定义的状态码、消息和数据
    return next.handle().pipe(
      map(data => {
        return {
          code: 200,// 自定义状态码
          message: '请求成功', // 自定义消息
          data: data, // 响应数据
        };
      }),
    );
  }
}
