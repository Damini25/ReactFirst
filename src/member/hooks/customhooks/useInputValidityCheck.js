import React, { useState } from 'react';

export const useInputValidity = () => {
    const [inputVal, setInputVal] = useState('');
    const [validity, setValidity] = useState(false);

    const inputChangeHandler = (event) => {
        setInputVal(event.target.value);
        if(event.target.value.trim() === ''){
            setValidity(false);
        }else{
            setValidity(true);
        }
    }
    return {
        inputValue: inputVal,
        onChangeHandler: inputChangeHandler,
        validity: validity
    }
}