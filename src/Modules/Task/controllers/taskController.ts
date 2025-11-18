import {STATES} from "../../../utilities/statusCodes";
import { Request, Response, NextFunction } from 'express';
import taskServices from "../services/taskServices";

class TaskController {
    constructor() {
    }

    async getAllTask(req:Request, res:Response, next: NextFunction){
        try{
            const result = await taskServices.getAllTask();
            return res.status(STATES.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async getTask(req: Request, res:Response, next: NextFunction){
        try{
            const {id} = req.params;
            const result = await taskServices.getTask(parseInt(id));
            return res.status(STATES.OK).json(result);
        }catch(error){
            return next(error);
        }
    }

    async createTask(req: Request, res: Response, next: NextFunction){
        try{
            const data =  req.body;
            const result = await taskServices.createTask(data);
            return res.status(STATES.CREATE).json(result);
        }catch(error){
            return next(error);
        }
    }

    async updateTask(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params;
            const data =  req.body;
            const result = await taskServices.updateTask(parseInt(id), data);
            return res.status(STATES.OK).json(result);
        }catch(error){
            return next(error)
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction){
        try{
            const {id} = req.params;
            await taskServices.deleteTask(parseInt(id));
            return res.status(STATES.OK).json();
        }catch (error){
            return next(error);
        }
    }
}

export default new TaskController();