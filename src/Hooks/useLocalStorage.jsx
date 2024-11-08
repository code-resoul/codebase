import { useState, useEffect } from 'react'

function useLocalStorage(codeKey, initialValue) {
    const[value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(codeKey);
        if(jsonValue != null) return JSON.parse(jsonValue);

        if(typeof initialValue === 'function') return initialValue();
        else return initialValue;
    })
    
    useEffect(() => {
        localStorage.setItem(codeKey, JSON.stringify(value))
    }, [codeKey, value]);

    return [value, setValue];
}

export default useLocalStorage