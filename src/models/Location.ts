import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    address: string;

    @Column()
    address_number: number;
}
