
import React, { useState, useEffect, useCallback, useMemo, useRef, createContext } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import TaskList from './TaskList';


// Context для глобального стану
export const TaskContext = createContext();

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [theme, setTheme] = useState('light');
    const taskInputRef = useRef(null);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = useCallback((text) => {
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
        if (taskInputRef.current) taskInputRef.current.value = '';
        taskInputRef.current.focus();
    }, [tasks]);

    const toggleTask = useCallback((id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    }, [tasks]);

    const deleteTask = useCallback((id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }, [tasks]);

    const filteredTasks = useMemo(() => tasks, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
            <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
                <Card className="p-4 max-w-md mx-auto">
                    <input ref={taskInputRef} placeholder="New Task" className="p-2 border mb-2 w-full" />
                    <Button onClick={() => addTask(taskInputRef.current.value)}>Add Task</Button>
                    <TaskList tasks={filteredTasks} />
                </Card>
            </div>
        </TaskContext.Provider>
    );
};

export default App;
