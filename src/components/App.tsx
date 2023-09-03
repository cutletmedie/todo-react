'use client'
import styles from "@/app/page.module.css";
import TaskForm from "@/components/TaskForm";
import MemoizedTasksList from "@/components/TasksList";
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import {TaskProps} from "@/components/Task";

const testTask = {id: '1488', text: "хуй1488", done: true};
const testTask2 = {id: '14881', text: "хуй14881", done: false};

const initialState = [testTask, testTask2];

enum ActionTypes {
    ADD = 'add',
    REMOVE = 'remove'
}

export default function App() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    function addTask(input: string) {
        const id = uuidv4();
        setTasks([...tasks, {id: id, text: input, done: false}]);
    }

    function removeTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
            <main className={styles.main}>
                <TaskForm addTask={addTask}/>
                <MemoizedTasksList tasks={tasks} removeTask={removeTask}/>
            </main>
    )
}