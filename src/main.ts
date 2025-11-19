import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseIntercept } from './common/ResponseIntercept';
import { AbnormaFilter } from './common/AbnormaFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 可跨域
  app.enableCors()
  // 全局使用拦截器和异常过滤器
  app.useGlobalInterceptors(new ResponseIntercept());
  app.useGlobalFilters(new AbnormaFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
