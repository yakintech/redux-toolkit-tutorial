import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../../store/todoSlice';

function ToDoList() {

    let dispatch = useDispatch();

    let { loading, error, todos } = useSelector(state => state.todosReducer);

    console.log('loading', loading);
    console.log('error', error);
    console.log('todos', todos);


    useEffect(() => {

        dispatch(fetchTodos());

    }, [])


    return (<>
        {
            loading ? <h1>loading...</h1> : <>
                <ul>
                    {
                        todos && todos.map(item => <li key={item.id}>{item.title}</li>)
                    }
                </ul>
            </>
        }
    </>
    )
}

export default ToDoList