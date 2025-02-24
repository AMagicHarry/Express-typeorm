import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Gauge } from './gauge.entity';

export enum GaugeValueStatus {
  DRAFT = 'draft',
  APPROVED = 'approved',
  SUBMITTED = 'submitted',
}

@Entity()
export class GaugeValue {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Gauge, (gauge) => gauge.id, {
    onDelete: 'CASCADE'
  })
  @Column()
  gauge_id!: number;

  @Column()
  value!: number;

  @Column()
  year!: number;

  @Column()
  quarter!: number;

  @Column({
    type: 'enum',
    enum: GaugeValueStatus,
  })
  status!: GaugeValueStatus;
}
