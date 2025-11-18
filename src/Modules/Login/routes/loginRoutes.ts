import express from 'express';
import LoginController from "../controllers/loginController";
import {loginValidation} from "../../../middlewares/loginValidation";

const router = express();

router.post('/', loginValidation, LoginController.login);

export default router;