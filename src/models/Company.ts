import {Entity, PrimaryGeneratedColumn, Column, ForeignKey} from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    legal_name: string;

    @Column()
    trade_name: string;

    @Column()
    cnpj: string;

    @Column()
    type: string;

    @Column()
    location_id: number;

    @Column()
    subsidiary: number;
}
