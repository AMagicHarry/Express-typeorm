import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Gauge } from './gauge.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToMany(() => Gauge, (gauge) => gauge.categories)
  gauges!: Gauge[];
}
