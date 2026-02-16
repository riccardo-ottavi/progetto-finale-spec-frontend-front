import { useState } from "react";

export default function useStorage(itemKey, initialValue) {
    const [state, setState] = useState(() => {

        const storedValue = localStorage.getItem(itemKey);
        if (storedValue === null || storedValue === "undefined") {
            localStorage.setItem(itemKey, JSON.stringify(initialValue));
            return initialValue;
        }
        return JSON.parse(storedValue);
    });

    const changeState = (newState) => {
        setState(prev => {
            const valueToStore = typeof newState === "function" ? newState(prev) : newState;
            localStorage.setItem(itemKey, JSON.stringify(valueToStore));
            return valueToStore;
        });
    };

    return [state, changeState];
}