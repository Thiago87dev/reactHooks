import { useState, useMemo } from "react";

const Calculation = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const calculation = useMemo(() => expensiveCalculation(count),[count]) 

    const increment = () =>{
        setCount((c) => c + 1)
    }

    const addTodo = () =>{
        setTodos((t) => [...t, 'New todo'])
    }

    return(
        <div>
            <div>
                <h2> My todos</h2>
                {todos.map((todo, index) =>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    )
}

const expensiveCalculation = (num) =>{
    console.log('calculating...');
    for(let i = 0; i < 1000000; i++){
        num += 1
    }
    return num
}

export default Calculation