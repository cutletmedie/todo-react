import React from "react";
import styles from './task.module.css'

interface TaskState {
    text: string;
    done: boolean;
}

export interface TaskProps extends TaskState {
    id: string;
}

interface TaskComponentProps extends TaskProps {
    removeTask: (id: string) => void;
}

export class Task extends React.Component<TaskComponentProps, TaskState> {
    constructor(props: TaskComponentProps) {
        super(props);
        this.state = {
            text: this.props.text,
            done: this.props.done,
        }
        // this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    // toggleCheckbox() {
    //     this.setState(state => ({done: !state.done}));
    // }

    render() {
        console.log('rendered task ' + this.state.text);
        return (
            <li>
                <div className={styles.task}>
                    <p>{this.state.text}</p>
                    <input type={"checkbox"} checked={this.state.done}
                           onChange={() => this.setState(state => ({done: !state.done}))}/>
                    <button
                        onClick={() => this.props.removeTask(this.props.id)}/>
                </div>
            </li>
        );
    }
}

export const MemoizedTask = React.memo(Task, (prevTask, nextTask) => {
    return prevTask.text === nextTask.text && prevTask.done === nextTask.done;
})

