import { useRef } from 'react';

// Using UseRef to get CURRENT STATE of DOM element

function UseRefExample1() {
    const inputRef = useRef();
    const paraRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current);
        paraRef.current.textContent =
            inputRef.current.value + ' ... Click to change';
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    ref={inputRef}
                    id="name"
                    className="form-control-mb-2"
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <p onClick={() => inputRef.current.focus()} ref={paraRef}>
                    Click her to set text
                </p>
            </form>
        </div>
    );
}

export default UseRefExample1;
