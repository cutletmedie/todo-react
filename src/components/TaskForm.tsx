import React, {ReactNode} from "react";

interface TaskInputState {
    input: string,
}

interface TaskInputProps {
    addTask: (text: string) => void
}


class TaskForm extends React.Component<TaskInputProps, TaskInputState> {
    constructor(props: TaskInputProps) {
        super(props);
    }

    state: TaskInputState = {
        input: '',
    }
    // handleChange(event : React.FormEvent<HTMLInputElement>) {
    //     this.setState({input: event.currentTarget.value});
    // }

    // handleSubmit(event: React.MouseEvent<HTMLElement>) {
    //     event.preventDefault();
    //     if (this.state.input.trim()) {
    //         this.props.addTask(this.state.input);
    //         this.setState({input: ''});
    //     }
    // }

    render(): ReactNode {
        return (
            <div>
                <form>
                    <input type='text'
                           onChange={(event) => this.setState({input: event.currentTarget.value})}
                           value={this.state.input}/>
                    <button type='submit' onClick={(event) => {
                        event.preventDefault();
                        if (this.state.input.trim()) {
                            this.props.addTask(this.state.input);
                            this.setState({input: ''});
                        }
                    }}/>
                </form>
            </div>)
    }
}

export default TaskForm;

// export const MemoizedTaskForm = React.memo(TaskForm);

