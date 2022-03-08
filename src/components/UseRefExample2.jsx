import { useState, useEffect, useRef } from 'react';

// Using UseRef to get PREVIOUS STATE of DOM element

function UseRefExample2() {
    const [name, setName] = useState('');

    const renders = useRef(1);
    const prevName = useRef('');

    useEffect(
        () => {
            renders.current += 1;

            prevName.current = name;
        },
        [
            name,
        ] /* if no dep. array given = always run this useEffect when rendering this component*/
    );

    return (
        <div>
            <h1>{renders.current}</h1>
            <h2>Prev Name State: {prevName.current}</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-3"
            />
        </div>
    );
}

export default UseRefExample2;
