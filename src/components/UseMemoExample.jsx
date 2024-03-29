import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoExample() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    const sqrt = useMemo(() => getSqrt(number), [number]);

    const renders = useRef(1);

    useEffect(() => {
        renders.current += 1;
    });

    const onClick = () => {
        setInc((previousIncValue) => {
            return previousIncValue + 1;
        });
    };

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="form-control w-25"
            />

            <h2 className="my-3">SQRT: {sqrt}</h2>

            <button onClick={onClick} className="btn btn-primary">
                Re-Render
            </button>
            <h3>Renders: {renders.current}</h3>
        </div>
    );
}

function getSqrt(n) {
    for (let i = 0; i < 1000; ++i) {
        console.log(i);
    }

    console.log('expensive function called...');
    return Math.sqrt(n);
}

export default UseMemoExample;
