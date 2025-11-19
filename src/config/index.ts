// 安装 typeorm mysql @nestjs/typeorm
// 编写配置文件 src/config/index.ts
// 在主模块中导入 TypeOrmModule 并使用配置文件
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',// 数据库用户名
  password: '123456',
  database: 'mysql-first-test',// 数据库名称
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,// 自动加载实体
  synchronize: true, // 是否自动将实体同步到数据库，生产环境建议关闭
};