import express from 'express';
import taskController from "../controllers/taskController";
import {taskValidation} from "../../../middlewares/taskValidation";
import {tokenValidation} from "../../../middlewares/tokenValidation";
import {roleValidation} from "../../../middlewares/roleValidation";

const router = express.Router();

router.get('/',tokenValidation, taskController.getAllTask);
router.post('/',tokenValidation, roleValidation("Administrador"),  taskValidation, taskController.createTask);
router.route('/:id')
    .get(tokenValidation,taskController.getTask)
    .put(tokenValidation, roleValidation("Administrador"),taskValidation, taskController.updateTask)
    .delete(tokenValidation, roleValidation("Administrador"),taskController.deleteTask);

export default router;