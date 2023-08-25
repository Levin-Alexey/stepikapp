import React from "react";
import css from "../../styles/form.css"

const {Input} = css

const InputComponent = () => {
    return (
        <>
            <Input
                type = {"text"}
                placeholder = {"Введите сумму транзакции"}
                maxLength = {"100"}
            />
        </>
    )
}


export default InputComponent