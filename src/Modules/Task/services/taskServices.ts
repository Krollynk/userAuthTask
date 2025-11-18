import {taskRepository} from "../repository/taskRepository";
import {Task} from "../../../entities/Task";
import {STATES} from '../../../utilities/statusCodes';

class TaskServices {
    async getAllTask(): Promise<Task[]> {
        return await taskRepository.find();
    }

    async getTask(taskId: number): Promise<Task> {
        const task = await taskRepository.findOneBy({taskId})

        if(!task){
            throw{statusCode: STATES.NOT_FOUND, message: "tarea no encontrada"};
        }

        return task;
    }

    async createTask(data: Partial<Task>): Promise<Task>{
        const { taskNombre, taskDescripcion, taskEstatus} = data;

        return await taskRepository.save({
            taskNombre,
            taskDescripcion,
            taskEstatus
        });
    }

    async updateTask(taskId: number, data: Partial<Task>): Promise<Task>{
        await this.getTask(taskId);

        const {taskNombre, taskDescripcion, taskEstatus} = data;

        await taskRepository.update({taskId}, {taskNombre, taskDescripcion, taskEstatus});

        return await this.getTask(taskId);
    }

    async deleteTask(taskId: number): Promise<void>{
        await this.getTask(taskId);
        const taskEstatus = "Eliminada";
        await taskRepository.update({taskId},{taskEstatus});
    }
}

export default new TaskServices();