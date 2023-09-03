import React from "react";
import styles from './task.module.css'

interface TaskState {
    text: string;
    done: boolean;
}

export type TaskProps = { id: string } & TaskState;

export class Task extends React.Component<TaskProps, TaskState> {
    constructor(props: TaskProps) {
        super(props);
        this.state = {
            text: this.props.text,
            done: this.props.done,
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    toggleCheckbox() {
        this.setState(state => ({done: !state.done}));
    }

    render() {
        console.log('rendered task ' + this.state.text );
        return (
            <div className={styles.task}>
                <p>{this.state.text}</p>
                <input type={"checkbox"} checked={this.state.done}
                       onChange={this.toggleCheckbox}/>
            </div>
        );
    }
}

export const MemoizedTask = React.memo(Task, (prevTask, nextTask) => {
    return prevTask.text === nextTask.text && prevTask.done === nextTask.done;
})

