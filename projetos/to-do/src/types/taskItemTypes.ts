export type TaskStatus = 'pending' | 'completed'

export type TaskItemType = {
    id : string,
    taskName : string,
    status : TaskStatus
}
