import React, {memo, ReactNode} from "react";
import {MemoizedTask, TaskProps} from "@/components/Task";
import styles from './task.module.css'


interface TasksListState {
    tasks: any[],
}

interface TasksListProps extends TasksListState {
    removeTask: (id: string) => void,
}


class TasksList extends React.Component<TasksListProps, TasksListState> {

    constructor(props: any) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    state: TasksListState = {
        tasks: this.props.tasks
    }

    // handleClick(event: React.MouseEvent<HTMLButtonElement>, id: string) {
    //     event.preventDefault();
    //     this.props.removeTask(id);
    // }

    render(): ReactNode {
        return (
            <ul className={styles.task_list}>
                {this.props.tasks.map((task: TaskProps) => {
                    console.log('rendered id ', task.id)
                    return (
                        <MemoizedTask id={task.id}
                                      text={task.text}
                                      done={task.done}
                                      key={task.id}
                        removeTask={this.props.removeTask}/>
                    )
                })
                }
            </ul>
        );
    }
    }

    export default TasksList;
    export const MemoizedTasksList = React.memo(TasksList, (prevProps, nextProps) => {
        return prevProps.tasks === nextProps.tasks;
    })