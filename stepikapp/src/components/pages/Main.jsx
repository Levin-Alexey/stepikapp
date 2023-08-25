import React from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import css from "../../styles/form.css"
import InputComponent from "../comps/Input";

const { FormContainer } = css
const Main = () => {
    return (
        <>
            <Head></Head>
            <FormContainer>
                <InputComponent/>
                <InputComponent/>
                <InputComponent/>
            </FormContainer>
            <Foot></Foot>
        </>
    )
}


export default Main