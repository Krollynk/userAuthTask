import {Request, Response, NextFunction} from "express";
import {STATES} from "../utilities/statusCodes";
import {Users} from "../entities/Users";

export const userValidation =
    (req: Request, res: Response, next: NextFunction)=>
    {
        console.log(req.method);
        if(!req.body || Object.keys(req.body).length === 0){
            return next({
                statusCode: STATES.ERROR,
                message: "Debe enviar parametros para esta solicitud",
            });
        }


        const {userName, userLastName, userEmail, userPassword, userRol}:Partial<Users> = req.body;
        if(req.method == 'POST'){
            if(!userName || userName.length === 0){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'No se encontró "Nombre" en la solicitud o su valor está vacío',
                });
            }

            if(!userLastName){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'No se encontró campo "Apellido" en la solicitud o su valor está vacío',
                });
            }

            if(!userEmail){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'No se encontró campo "Email" en la solicitud o su valor está vacío',
                });
            }
            if(!userPassword){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'No se encontró campo "Password" en la solicitud o su valor está vacío',
                });
            }
            if(!userRol){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'No se encontró campo "Rol" en la solicitud o su valor está vacío',
                });
            }
        }

        if(req.method == 'PATCH'){
            if(userName !== undefined && userName.trim().length === 0){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'El "Nombre" no puede estar vacío para su solicitud',
                });
            }

            if(userLastName !== undefined && userLastName.trim().length === 0){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'El "Apellido" no puede estar vacío para su solicitud',
                });
            }

            if(userEmail !== undefined && userEmail.trim().length === 0){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'El "Email" no puede estar vacío para su solicitud',
                });
            }
            if(userPassword !== undefined && userPassword.trim().length === 0){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'El "Password" no puede estar vacío para su solicitud',
                });
            }
            if(userRol !== undefined && userRol.trim().length === 0){
                return next({
                    statusCode: STATES.ERROR,
                    message: 'El "Rol" no puede estar vacío para su solicitud',
                });
            }
        }

        next();
    }