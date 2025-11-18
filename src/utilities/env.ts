import {config} from "dotenv";
config();

export const ENV = {
    PORT: Number(process.env.PORT),
    HOST: process.env.HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT),
    DATABASE: process.env.DATABASE as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASS: process.env.DB_PASS as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_EXPIRES: process.env.JWT_EXPIRES as `${number}${"m"|"h"|"d"}`,
}