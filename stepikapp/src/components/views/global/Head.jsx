import React from "react";
import css from "../../../styles/styles"

const { HeaderContainer, HeaderCSS } = css

const Head = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
            </HeaderContainer>
        </>
    )
}


export default Head