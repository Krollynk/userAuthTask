import {ENV} from '../utilities/env';
import "reflect-metadata";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
   type: "mysql",
   host: ENV.HOST,
   port: ENV.DB_PORT,
   username: ENV.DB_USER,
   password: ENV.DB_PASS,
   database: ENV.DATABASE,
   logging: true,
   entities: [__dirname + "/../entities/**/*.{ts, js}"],
   synchronize: false,
});