import { Request, Response, NextFunction } from "express";
import {STATES} from "../utilities/statusCodes";

export const taskValidation =
    (req: Request,
     res: Response,
     next: NextFunction
    ) =>
    {
        if(!req.body || Object.keys(req.body).length === 0){
            return next({
                statusCode: STATES.ERROR,
                message: "Debe enviar parametros para esta solicitud",
            });
        }
        const { taskNombre, taskDescripcion, taskEstatus } = req.body;

        if(!taskNombre){
            return next({
                statusCode: STATES.ERROR,
                message: "El nombre es obligatorio",
            });
        }

        if(!taskDescripcion){
            return next({
                statusCode: STATES.ERROR,
                message: "La descripción es obligatoria",
            });
        }

        if(!taskEstatus ){
            return next({
                statusCode: STATES.ERROR,
                message: "El Estatus es obligatorio",
            });
        }

        next();
    }