import { CreateTask } from "./CreateTask.interface";

export interface Task extends CreateTask {
    id:string,
    completed:boolean,
    user:any;
}