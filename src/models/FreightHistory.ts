import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class FreightHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_id: number;

    @Column()
    origin_subsidiary_id: number;

    @Column()
    destination_subsidiary_id: number;

    @Column()
    driver_id: number;

    @Column()
    car_id: number;

    @Column()
    transport_product: string;

    @Column("decimal")
    load_weight: number;

    @Column("decimal")
    total_cost: number;

    @Column({ type: "timestamp" })
    initial_date: Date;

    @Column({ type: "timestamp" })
    due_date: Date;

    @Column()
    observation: string;

    @Column()
    status: string;
}
