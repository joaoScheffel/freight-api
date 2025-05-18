import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_id: number;

    @Column()
    subsidiary_id: number;

    @Column()
    model: string;

    @Column()
    license_plate: string;

    @Column()
    chassis_cod: string;

    @Column("decimal")
    capacity_in_tons: number;

    @Column("decimal")
    average_consumption_per_liter: number;

    @Column()
    truck_type: string;

    @Column("decimal")
    average_maintenance_cost: number;

    @Column()
    mileage: number;

    @Column()
    cargo_type: string;

    @Column()
    status: boolean;
}
