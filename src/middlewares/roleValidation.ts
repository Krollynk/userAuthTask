import {Request, Response, NextFunction} from "express";
import {STATES} from "../utilities/statusCodes";

export const roleValidation = (...allowedRoles:string[])=> {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRol = req.user?.rol;

        if(!userRol) {
            return res.status(STATES.FORBIDDEN).json({message: "No Autorizado"});
        }

        if(!allowedRoles.includes(userRol)){
            return res.status(STATES.FORBIDDEN).json({message: "Rol no autorizado para esta opcion"});
        }

        next();
    };
};