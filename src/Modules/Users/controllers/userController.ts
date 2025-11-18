import {Request, Response, NextFunction} from "express";
import {STATES} from "../../../utilities/statusCodes";
import userServices from "../services/userServices";

class userController {
    constructor() {
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction){
        try{
            const result = await userServices.getAllUsers();
            return res.status(STATES.OK).json(result);
        }catch(error){
            return next(error);
        }
    }

    async getUser(req: Request, res: Response, next: NextFunction){
        try{
            const {userId} = req.params;
            const result = await userServices.getUser(parseInt(userId));
            return res.status(STATES.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction){
        try{
            const data = req.body;
            const result = await userServices.createUser(data);
            return res.status(STATES.OK).json(result);
        }catch (error){
            return next();
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction){
        try{
            const {userId} = req.params;
            const data = req.body;
            const result = await userServices.updateUser(parseInt(userId), data);
            return res.status(STATES.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction){
        try{
            const {userId} = req.params;
            await userServices.deleteUser(parseInt(userId));
            return res.status(STATES.OK).json();
        }catch (error){
            return next(error);
        }
    }
}

export default new userController();