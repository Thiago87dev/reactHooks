import { useState, useEffect } from "react";

export default function RenderCount(){
    const [count, setCount] = useState(0)

    useEffect(() =>{
        setTimeout(() => {
            setCount((count) => count + 1)
        },1000)
    }, []) // colchetes vazio para renderizar apenas uma vez

    return(
        <h1>I've rendered {count} times</h1>
    )
}