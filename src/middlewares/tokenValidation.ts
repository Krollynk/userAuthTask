import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import {JwtPayloadCustom} from "../types/jwt";
import {STATES} from "../utilities/statusCodes";
import {ENV} from "../utilities/env";

export const tokenValidation =
    (
        req: Request,
        res: Response,
        next: NextFunction
    )=>
    {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith("Bearer ")){
                return res.status(STATES.UNAUTHORIZED).json({message: "Token no proporcionado"});
            }

            const token = authHeader.split (" ")[1];

            const decoded = jwt.verify(
                token,
                ENV.JWT_SECRET as string
            ) as JwtPayloadCustom;
            req.user = decoded;

            return next();

        }catch(error){
            next(
                {
                    statusCode: STATES.UNAUTHORIZED,
                    message: "Token inválido o expirado",
                }
            );
        }
        next();
    }