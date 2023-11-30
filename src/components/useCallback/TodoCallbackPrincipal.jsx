import { useState, useCallback } from "react";
import TodoCallback from "./TodoCallback";

const TodoCallbackPrincipal = () =>{
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () =>{
        setCount((c) => c + 1)
    }
    
    const addTodo = useCallback(() =>{
        setTodos((t) => [...t, 'New Todo'])
    },[])

    return(
        <>
            <TodoCallback todos={todos} addTodo={addTodo}/>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default TodoCallbackPrincipal