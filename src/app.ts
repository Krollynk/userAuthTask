import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import {Request, Response} from "express";
import {logger} from "./middlewares/logger";
import {errorHandler} from "./middlewares/errorHandler";
import taskRoutes from "./Modules/Task/routes/taskRoutes";
import userRoutes from "./Modules/Users/routes/userRoutes";
import loginRoutes from "./Modules/Login/routes/loginRoutes";

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(logger);

app.get('/', (req: Request, res: Response) => {
    console.log("Página de inicio de Usuarios con Autenticación para Task");
    res.send("Página de inicio de Usuarios con Autenticación para Task");
});

app.use('/task', taskRoutes);
app.use('/user', userRoutes);
app.use('/login', loginRoutes);

app.use(errorHandler);

export default app;