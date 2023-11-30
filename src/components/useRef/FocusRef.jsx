import { useRef } from "react";

export default function FocusRef() {
    const inputElement = useRef()

    const focusInput = () => {
        inputElement.current.focus()
    }

    return(
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus input</button>
        </>
    )
}