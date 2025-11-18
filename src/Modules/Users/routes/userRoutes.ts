import express from "express";
import userController from "../controllers/userController";
import {userValidation} from "../../../middlewares/userValidation";

const router = express();

router.get('/', userController.getAllUsers);
router.post('/', userValidation, userController.createUser);
router.route('/:userId')
    .get(userController.getUser)
    .patch(userValidation, userController.updateUser)
    .delete(userController.deleteUser);

export default router;