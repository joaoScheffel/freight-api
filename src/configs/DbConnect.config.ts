import "reflect-metadata";
import { DataSource } from "typeorm";
import EnvConfig from "../configs/Env.config";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'dpg-d0kgmat6ubrc73b9qnr0-a.oregon-postgres.render.com',
    port: 5432,
    username: 'freight_db_user',
    password: 'PxlwBxluHMML0JGHoQRy8n49PsJP7SIY',
    database: 'freight_db',
    synchronize: true,
    logging: false,
    ssl: {
        rejectUnauthorized: false
    },
    entities: ['src/models/*.ts'],
    migrations: [],
    subscribers: [],
  });