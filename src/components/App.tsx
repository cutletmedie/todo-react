'use client'
import styles from "@/app/page.module.css";
import MemoizedTasksList from "@/components/TasksList";
import {v4 as uuidv4} from 'uuid';
import {useCallback, useState} from "react";
import {TaskProps} from "@/components/Task";
import TaskForm from "@/components/TaskForm";

export default function App() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const addTask = useCallback((input: string) =>{
        const id = uuidv4();
        setTasks([...tasks, {id: id, text: input, done: false}]);
    },[tasks])

    const removeTask = useCallback((id: string) =>{
        setTasks(tasks.filter(task => task.id !== id));
    }, [tasks])

    return (
            <main className={styles.main}>
                <TaskForm addTask={addTask}/>
                <MemoizedTasksList tasks={tasks} removeTask={removeTask}/>
            </main>
    )
}