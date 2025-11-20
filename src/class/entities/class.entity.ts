// 生成class实体类
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  class_img: string;
  @Column()
  price: number;
  
}