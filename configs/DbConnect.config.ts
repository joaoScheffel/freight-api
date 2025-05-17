import "reflect-metadata";
import { DataSource } from "typeorm";
import { env } from "../configs/Env";
import { Car } from "../models/Car";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: env.DB_URL,
    synchronize: true,
    logging: false,
    entities: [Car],
    migrations: [],
    subscribers: [],
});
