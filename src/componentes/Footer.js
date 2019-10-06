import React from "react"
import styled from "styled-components"
import Logo from "../img/moviedb.png"

const Footer = styled.div `
    background: rgba(38,50,56,1);
    padding:20px 0;
    display:flex;
    justify-content:center;
    align-items: center;
    >img {
        width: 100px;
        line-height: 200px;
    }
`

export default () => (
    <Footer>
        <img src={Logo} alt="Logo moviedb"></img>
    </Footer>
)