import React from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import css from "../../styles/form.css"
import InputComponent from "../comps/Input";

const { FormContainer, Button } = css
const Main = () => {
    return (
        <>
            <Head></Head>
            <FormContainer>
                <InputComponent placeholder = {"Введите сумму транзакции"}/>
                <InputComponent placeholder = {"Введите тип транзакции"}/>
                <InputComponent placeholder = {"Введите комментарий"} />
                <Button backgroundColor = {"rgb(229, 229, 229)"}>Сохранить транзакцию</Button>
            </FormContainer>
            <Foot></Foot>
        </>
    )
}


export default Main