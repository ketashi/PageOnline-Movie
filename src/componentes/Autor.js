import React from "react";
import styled from "styled-components";

const urlBaseImage = "https://image.tmdb.org/t/p/w185"
const Container = styled.div `
    border: 2px solid gold;
    margin:2px;
    text-align:center;
    heigth: 185px;
`
const Foto = styled.img `

`
const Nombre = styled.span `
    background: rgba(0,0,0,.5);
    color:white;
    display:inline-block;
    width:100%;
    padding-top: 5px;
`
export default ({ autor }) => (
    <Container>
        <Foto src={autor.profile_path ? urlBaseImage+autor.profile_path : "https://dummyimage.com/185x278/783d78/fff&text=no_image"}/>
        <Nombre>{autor.name}</Nombre>
    </Container>
)
