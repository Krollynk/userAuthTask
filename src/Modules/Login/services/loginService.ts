import {userRepository} from "../../Users/repository/userRepository";
import {ENV} from "../../../utilities/env";
import {STATES} from "../../../utilities/statusCodes";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
class LoginService {
    async login(userEmail: string, userPassword: string){
        const user = await userRepository.findOne({
            where: { userEmail }
        });


        if(!user){
            throw {
                statusCode: STATES.UNAUTHORIZED,
                message: "Usuario o Contraseña incorrecta"
            }
        }

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if(!isMatch){
            throw {
                statusCode: STATES.UNAUTHORIZED,
                message: "Usuario o Contraseña incorrecta"
            }
        }

        const token = jwt.sign(
            {
                id: user.userId,
                email: user.userEmail,
                rol: user.userRol
            },
            ENV.JWT_SECRET,
            { expiresIn: ENV.JWT_EXPIRES }
        );

        const data = {
            "userName": user.userName,
            "userEmail": user.userEmail
        }

        delete (user as any).userPassword;

        return {data, token};
    }
}

export default new LoginService();