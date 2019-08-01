import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import axios from 'axios';
import ListComponent from './list';
import {useInputValidity} from './customhooks/useInputValidityCheck';

const Todo = (props) => {
    //  const [todoName, setTodoName] = useState('');
    // const [todoList, setTodoList] = useState([]);
    const [todoState, setTodoState] = useState({ todoName: '', todoList: [] });

    const onInputChange = (event) => {
        setTodoState({ todoName: event.target.value, todoList: todoState['todoList'] });
    }

    const inputRef = useRef();
    const useInputValid=useInputValidity();

    useEffect(() => {
        //can call http get; and store data in some array  ex todo;
        //can set setTodoState({todoName:todoState.todoName,todoList:todo})
    });

    /**
     * useReducer()
     */
    const reducerFunction = (state, action) => {
        switch (action) {
            case 'Set':
                return action.payload;

            case 'Add':
                const newState = state.concat(action.payload);
                return newState;
        }
    }
    const [todoList, dispatchAction] = useReducer(reducerFunction, []);

    const addToList = () => {
        setTodoState({
            todoName: useInputValid.inputValue,
            todoList: todoState['todoList'].concat(useInputValid.inputValue)
        });
        //save data to DB
        /* axios.post('url', todoState.todoName).then((res) => {
             console.log('posted todo', res);
         });*/
    }
    return (
        <div>
            <input /*ref={inputRef}*/ onChange={useInputValid.onChangeHandler}
             value={useInputValid.inputValue} />
            <button onClick={addToList}>Add</button>
            {useMemo(() =>
                (<ListComponent data={todoState['todoList']}></ListComponent>)
                , [todoState['todoList']])}

            {/* <ul>
                {todoState['todoList'].map((val, index) =>
                    (
                        <li key={index}>{val}</li>
                    ))
                }
            </ul> */}
        </div>);
}
export default Todo;