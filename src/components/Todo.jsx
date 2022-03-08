import { useState, useEffect, useRef } from 'react';

function Todo() {
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState({});

    const isMounted = useRef(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setTodo(data);
                        setLoading(false);
                    }
                }, 3000);
            });

        // Runs when component is unmounted (<Todo /> removed from DOM)
        return () => {
            isMounted.current = false;
        };
    }, [isMounted]);

    return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
}

export default Todo;
