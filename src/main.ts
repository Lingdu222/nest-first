import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 引入拦截器和异常过滤器 
import { ResponseIntercept } from './common/ResponseIntercept';
import { AbnormaFilter } from './common/AbnormaFilter';

// 引入DTO校验管道
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 可跨域
  app.enableCors()
  
  // 全局使用拦截器和异常过滤器
  app.useGlobalInterceptors(new ResponseIntercept());
  app.useGlobalFilters(new AbnormaFilter());
  
  // 全局使用DTO校验
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
