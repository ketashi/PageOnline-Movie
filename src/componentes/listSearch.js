import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const urlBaseImage = "https://image.tmdb.org/t/p/w185"
const Container = styled.div `
    display:flex;
    background:black;
    flex-wrap:wrap;
`
const Item = styled(Link) `
    background: url(${props => urlBaseImage + props.item.poster_path}) no-repeat;
    background-size: cover;
    height: 300px;
    width: 200px;
`
export default ({listSearch}) => (
    <Container>
           {listSearch.map(item => (
            <Item key={item.id} item={item} to={`pageDetails/${item.id}`}>{item.title}</Item>
           ))
           }
    </Container>
)