import {Request, Response, NextFunction} from "express";
import LoginService from "../services/loginService";
import {STATES} from "../../../utilities/statusCodes";

class LoginController {
    constructor() {
    }

    async login(req: Request, res: Response, next: NextFunction){
        try{
            const {userEmail, userPassword} = req.body;
            const result = await LoginService.login(userEmail, userPassword);
            return res.status(STATES.OK).json(result);
        }catch (error){
            next(error);
        }
    }
}

export default new LoginController();