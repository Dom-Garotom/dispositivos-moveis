import { TaskItemType, TaskStatus } from "@/src/types/taskItemTypes";
import { createContext } from "react";

type TaskListContextType = {
    list : TaskItemType[],
    pendingTask : TaskItemType[],
    completedTask : TaskItemType[],

    addTask : ( taskName : string ) => void,
    removeTask : ( id : string , status ?: TaskStatus ) => void,
    changeStatusTask : ( id : string  , status : TaskStatus) => void,
}

export const TaskListContext = createContext<TaskListContextType>({
    list: [],
    pendingTask : [],
    completedTask : [],
    addTask : () => '',
    removeTask : () => '',
    changeStatusTask : () => ''
})