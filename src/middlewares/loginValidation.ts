import { Request, Response, NextFunction } from "express";
import {STATES} from "../utilities/statusCodes";

export const loginValidation =
    (
        req: Request,
        res: Response,
        next: NextFunction
    )=>
    {
        if(!req.body || Object.keys(req.body).length === 0){
            return next({
                statusCode: STATES.ERROR,
                message: "Debe enviar parametros para esta solicitud",
            });
        }

        const { userEmail, userPassword } = req.body;

        if(!userEmail){
            return next({
                statusCode: STATES.ERROR,
                message: 'No se encontró campo "Email" en la solicitud o su valor está vacío',
            });
        }
        if(userEmail.trim().length === 0){
            return next({
                statusCode: STATES.ERROR,
                message: 'El "Email" no puede estar vacío para su solicitud',
            });
        }
        if(!userPassword){
            return next({
                statusCode: STATES.ERROR,
                message: 'No se encontró campo "Password" en la solicitud o su valor está vacío',
            });
        }
        if(userPassword.trim().length === 0){
            return next({
                statusCode: STATES.ERROR,
                message: 'El "Password" no puede estar vacío para su solicitud',
            });
        }
        next();
    }