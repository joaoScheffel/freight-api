import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AuthorizedUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_id: number;

    @Column()
    email: string;

    @Column()
    permission: string;
}