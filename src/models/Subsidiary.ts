import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Subsidiary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_id: number;

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
}
