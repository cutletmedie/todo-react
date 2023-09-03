import React, {memo, ReactNode} from "react";
import {MemoizedTask, TaskProps} from "@/components/Task";
import styles from './task.module.css'


type TasksListType = { tasks: any[] };


class TasksList extends React.Component<TasksListType & { removeTask: (id: string) => void }, TasksListType> {

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state: TasksListType = {
        tasks: this.props.tasks
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>, id: string) {
        event.preventDefault();
        this.props.removeTask(id);
    }

    render(): ReactNode {
        return (
            <ul className={styles.task_list}>
                {this.props.tasks.map((task: TaskProps) => {
                    return (
                        <li key={task.id}>
                            <MemoizedTask id={task.id}
                                          text={task.text}
                                          done={task.done}
                            />
                            <button
                                onClick={(event) => this.handleClick(event, task.id)}/>
                        </li>
                    )
                })
                }
            </ul>
        );
    }
}

export default TasksList;
export const MemoizedTasksList = memo(TasksList, (prevProps, nextProps) => {
    return prevProps.tasks === nextProps.tasks;
})