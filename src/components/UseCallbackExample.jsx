import React, { useCallback, useState } from 'react';

function UseCallbackExample() {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some New Task']);
    }, [setTasks]);

    return (
        <div>
            <AddButton addTask={addTask} />
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    );
}

export default UseCallbackExample;
// Button component

const AddButton = React.memo(({ addTask }) => {
    console.log('Button rendered');

    return (
        <div>
            <button className="btn btn-primary" onClick={addTask}>
                Add Task
            </button>
        </div>
    );
});
