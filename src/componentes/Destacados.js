import React from "react"
import styled from "styled-components"

const urlBaseImage = "https://image.tmdb.org/t/p/w780"
const Inicio = styled.div`
    background: url(${props => urlBaseImage+props.pelicula.backdrop_path}) no-repeat;
    background-size:cover;
    height:700px;
    color: white;
    font-family: "Anton", sans-serif;
`
const PeliculaInfo = styled.div`
    position:relative;
    color: rgba(205,220,57,1);
`
const PeliculaContent = styled.div`
    position:absolute;
    top:150px;
    left:50px;
    background:rgba(38,50,56,.5);
    padding: 0 10px;
`
const PeliculaTitulo = styled.h1`
    color:rgba(255,179,0,1);
    font-family:"Rock Salt", cursive;
    max-width:500px;
    text-align:center;
`
const PeliculaInfoOverview = styled.p`
    font-size:14px;
    max-width:500px;
    text-align:justify;
`
const VotoPromedio = styled.span`
    color: rgba(100,221,23,1);
    font-family:"Cinzel", serif;
`
export default ({peliculas}) => (
    <Inicio pelicula={peliculas}>
        <PeliculaInfo>
            <PeliculaContent>
                <PeliculaTitulo>{peliculas.title}</PeliculaTitulo>
                <PeliculaInfoOverview>{peliculas.overview}</PeliculaInfoOverview>
                <VotoPromedio>{peliculas.vote_average}/10</VotoPromedio>
            </PeliculaContent>
        </PeliculaInfo>
    </Inicio>
)