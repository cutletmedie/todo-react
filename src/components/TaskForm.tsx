import React, {ReactNode} from "react";

type TaskInputType = {
    input: string,
    submit: string
}

class TaskForm extends React.Component<{addTask: (text: string) => void}, TaskInputType> {
    constructor(props: {addTask: (text: string) => void}) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state : TaskInputType = {
        input: '',
        submit: ''
    }
    handleChange(event : React.FormEvent<HTMLInputElement>) {
        this.setState({input: event.currentTarget.value});
    }

    handleSubmit(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        if (this.state.input.trim()) {
            this.props.addTask(this.state.input);
            this.setState({input: '', submit: this.state.input});
        }
    }

    render(): ReactNode {
            return (
                <div>
                    <form>
                        <input type='text' onChange={this.handleChange} value={this.state.input}/>
                        <button type='submit' onClick={this.handleSubmit}/>
                    </form>
                </div>)
    }
}

export default TaskForm;

