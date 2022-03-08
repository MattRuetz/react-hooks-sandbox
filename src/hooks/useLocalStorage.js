import { useState } from 'react';

function getLocalStorageValue(key, initialValue) {
    const loadedItem = localStorage.getItem(key);
    return loadedItem ? JSON.parse(loadedItem) : initialValue;
}

function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(() =>
        getLocalStorageValue(key, initialValue)
    );

    const setValue = (value) => {
        //Check if recieved a function as input..
        const valueToStore =
            value instanceof Function ? value(localStorageValue) : value;

        // Set state
        setLocalStorageValue(value);

        // Set localStorage
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [localStorageValue, setValue];
}

export default useLocalStorage;
