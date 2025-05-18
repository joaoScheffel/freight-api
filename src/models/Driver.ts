import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_id: number;

    @Column()
    subsidiary_id: number;

    @Column({ type: 'char', length: 1 })
    cnh_type: string;

    @Column()
    cnh_number: number;

    @Column()
    cpf_number: number;

    @Column()
    rg_number: number;

    @Column({ type: 'date' })
    birthdate: Date;

    @Column('decimal')
    hourly_rate: number;

    @Column("int", { array: true })
    certificate: number[];

    @Column({ type: 'date' })
    cnh_due_date: Date;

    @Column()
    travel_status: string;

    @Column()
    status: boolean;
}
