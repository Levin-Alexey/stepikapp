import React, {useState} from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import css from "../../styles/form.css"
import InputComponent from "../comps/Input";

const {FormContainer, Button} = css
const Main = () => {
    const [value, setValue] = useState()
    const [type, setType] = useState()
    const [comment, setComment] = useState()

    const validation = () => {
        if (value.length > 2 && type) {
            console.log('Успешная валидация')
            setValue('')
            setType('')
            setComment('')

        } else {
            console.log('Ошибка валидации')
        }
    }
    return (<>
        <Head></Head>
        <FormContainer>
            <InputComponent inputValue={value} action={setValue} placeholder={"Введите сумму транзакции"}/>
            <InputComponent inputValue={type} action={setType} placeholder={"Введите тип транзакции"}/>
            <InputComponent  inputValue={comment} action={setComment} placeholder={"Введите комментарий"}/>
            <Button
                backgroundColor={"rgb(176, 243, 71)"}
                onClick={validation}
            >Сохранить транзакцию</Button>
        </FormContainer>
        <span>{value}</span><br/>
        <span>{type}</span><br/>
        <span>{comment}</span>
        <Foot></Foot>
    </>)
}


export default Main