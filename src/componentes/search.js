import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

const Container = styled.div `
    padding: 5px;
    border: 1px solid white;
`
const Search = styled.input `
    background: none;
    border: none;
    height: 22px;
    color: yellow;
    width: 200px;
    margin-left: 5px;
    &:focus{
        outline:none;
    }
    &::placeholder{
        color: #FFCA28;
    }

`

export default ({onChangeSearch,onClean,valueText}) => (
    <Container>
        <FontAwesomeIcon icon={faSearch} fixedWidth />
        <Search placeholder="buscar" onChange= {onChangeSearch} value={valueText}/>
        <FontAwesomeIcon icon={faTimes} fixedWidth onClick={onClean} />
    </Container>
)