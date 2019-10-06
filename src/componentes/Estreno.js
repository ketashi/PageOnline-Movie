import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const urlBaseImage = "https://image.tmdb.org/t/p/w154"
const Contenedor = styled.div`
    >ul{
        background: palevioletred;
        color:white;
        margin:0;
        overflow:scroll;
        padding-left: 0;
        display:flex;
        align-item:strech;
    }
`
const ItemPelicula = styled(Link)`
    list-style: none;
    display:inline-block;
    background: url(${props => urlBaseImage+props.pelicula.poster_path}) no-repeat ;
    background-size:cover;
    min-width: 200px;
    margin: 5px;
    height: 300px;
    font-family: "Amatic SC", cursiva;
    font-size:20px;
    text-align:center;
    color:yellow;
    >span{
        background: rgba(50,55,58,.3);
        padding: 0 10px;
        border-radius: 2px;
        font-weight: bold;
        display:none;
    }
    &:hover{
        >span{
            display:block;
        }
    }
`
export default ({peliculas}) => (
    <Contenedor>
        <ul>
        {
            peliculas.map(data => 
                <ItemPelicula key={data.id} to={`pagedetails/${data.id}`} pelicula={data}>
                    <span>{data.title}</span>
                </ItemPelicula>
            )
        }
        </ul>
    </Contenedor>
)