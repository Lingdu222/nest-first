import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 引入拦截器和异常过滤器 
import { ResponseIntercept } from './common/ResponseIntercept';
import { AbnormaFilter } from './common/AbnormaFilter';

// 引入DTO校验管道
import { ValidationPipe, HttpException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 可跨域
  app.enableCors()
  
  // 全局使用拦截器和异常过滤器
  app.useGlobalInterceptors(new ResponseIntercept());
  app.useGlobalFilters(new AbnormaFilter());
  
  // 全局使用DTO校验
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动过滤掉没有装饰器的属性
      forbidNonWhitelisted: false, // 不禁止未定义的属性
      transform: true, // 自动转换类型
      transformOptions: {
        enableImplicitConversion: true, // 启用隐式类型转换
      },
      // 自定义错误响应格式
      exceptionFactory: (errors) => {
        const messages = errors.map((error) => {
          return Object.values(error.constraints || {}).join(', ');
        });
        return new HttpException(
          {
            statusCode: 400,
            message: messages,
            error: 'Bad Request',
          },
          400,
        );
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
