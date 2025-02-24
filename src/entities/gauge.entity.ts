import { Entity as Model, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn, JoinTable, OneToMany } from 'typeorm';
import { Entity } from './entity.entity';
import { Category } from './category.entity';
import { User } from './user.entity';
import { GaugeValue } from './gaugeValue.entity';

@Model()
export class Gauge {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  unit!: string;

  @Column()
  started_on!: Date;

  @Column({ nullable: true })
  ended_on?: Date;

  @Column()
  time_interval!: string;

  @Column()
  import_only!: boolean;

  @Column({ default: 0 })
  scope!: number;
  
  @OneToMany(() => GaugeValue, (gaugeValue) => gaugeValue.gauge_id)
  @JoinTable()
  values?: GaugeValue[];

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  approved_by?: User;

  @Column({ nullable: true })
  approved_date?: Date;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  submitted_by?: User;

  @Column({ nullable: true })
  submitted_date!: Date;
  
  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  updated_by?: User;

  @Column({ nullable: true })
  updated_date?: Date;

  @ManyToMany(() => Entity, (entity) => entity.gauges)
  @JoinTable()
  entities!: Entity[];

  @ManyToMany(() => Category, (category) => category.gauges)
  @JoinTable()
  categories!: Category[];
}
