import React, { useContext } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';


import { TaskContext } from './App';

const TaskItem = ({ task }) => {
    const { toggleTask, deleteTask } = useContext(TaskContext);

    return (
        <Card className="p-2 flex items-center justify-between mb-2">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div>
                <Button onClick={() => toggleTask(task.id)}>Toggle</Button>
                <Button onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
        </Card>
    );
};

export default TaskItem;
