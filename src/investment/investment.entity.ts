import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('investments')
export class Investment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // Ex: "Renda Fixa", "Bolsa"

  @Column()
  name: string; // Nome do investimento

  @Column('decimal', { precision: 10, scale: 2 })
  rate: number; // Rentabilidade

  @Column({ nullable: true })
  description?: string; // Descrição opcional
}
