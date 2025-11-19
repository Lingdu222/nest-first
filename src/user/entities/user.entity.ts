// 引入实体所需依赖
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 使用@Entity装饰器将类标记为数据库实体
@Entity()
export class User {
  // 使用@PrimaryGeneratedColumn装饰器标记主键并自动生成值
  @PrimaryGeneratedColumn()
  id: number;

  // 使用@Column装饰器定义普通列
  @Column()
  userName: string;

  @Column()
  password: number;

  @Column()
  head_img: string;
}