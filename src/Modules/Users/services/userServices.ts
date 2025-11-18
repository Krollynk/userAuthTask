import {userRepository} from "../repository/userRepository";
import {Users} from "../../../entities/Users";
import {CreateUserDto} from "../dtos/createUserDto";
import {STATES} from "../../../utilities/statusCodes";
import {Not} from "typeorm";
import bcrypt from 'bcryptjs';

class userServices {
    async getAllUsers():Promise<Users[]>{
        return await userRepository.find({
            where: {
                userStatus: Not("Eliminado")
            }
        });
    }

    async getUser(userId: number): Promise<Users>{
        const result = await userRepository.findOneBy({userId});

        if(!result){
            throw{statusCode: STATES.NOT_FOUND, message: "Usuario no encontrado"};
        }

        return result;
    }

    async createUser(data: CreateUserDto): Promise<Users>{
        data.userPassword =  await bcrypt.hash(data.userPassword, 10);
        const {userName, userLastName, userEmail, userPassword, userRol} = data;

        const userStatus = "Creado";
        return await userRepository.save({
            userName,
            userLastName,
            userEmail,
            userPassword,
            userRol,
            userStatus
        });
    }

    async updateUser(userId: number, data: Partial<Users>): Promise<Users>{
        await this.getUser(userId);

        if(data.userPassword){
            data.userPassword = await bcrypt.hash(data.userPassword, 10);
        }

        await userRepository.update({userId}, data);

        return await this.getUser(userId);
    }

    async deleteUser(userId: number): Promise<void>{
        await this.getUser(userId);
        const userStatus = "Eliminado";

        await userRepository.update({userId}, {userStatus});
    }
}

export default new userServices();