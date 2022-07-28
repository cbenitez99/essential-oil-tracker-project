import React, {useState} from 'react'

export default function useLocalStorage(val) {
    let [value, setValue] = useState(val);
    return [value, setValue]
};