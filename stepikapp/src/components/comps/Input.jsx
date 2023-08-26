import React, {useState} from "react";
import css from "../../styles/form.css"

const {Input} = css

const InputComponent = (props) => {
    const { placeholder } = props
    const [ inputValue, setinputValue ] = useState(0)
    return (
        <>
            <Input
                type = {"text"}
                placeholder = {placeholder}
                maxLength = {"100"}
                onChange={event => {
                    const newValue = event.target.value
                    setinputValue(newValue)
                }}
            />
            <span>{inputValue} руб.</span>
        </>
    )
}


export default InputComponent