/**
 * 异常过滤器
 */
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

// catch装饰器用于绑定异常类型，这里不指定异常类型，表示捕获所有异常
@Catch()
export class AbnormaFilter implements ExceptionFilter {
  // ExceptionFilter 接口要求实现catch方法
  // exception参数是被捕获的异常对象，host参数提供对当前请求上下文的访问
  catch(exception: unknown, host: ArgumentsHost) {
    // 切换到HTTP上下文，以便访问请求和响应对象
    const ctx = host.switchToHttp();
    // 获取 上下文的response
    const response = ctx.getResponse<Response>();
    // 获取 上下文的 request 对象
    // const request = ctx.getRequest<Request>();
    // 获取异常的状态码
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // 获取异常消息
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : exception;

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
