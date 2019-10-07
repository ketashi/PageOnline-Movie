import React from "react"
import styled from "styled-components"
import Search from "./search"
import {connect} from "react-redux"

import {getSearch,getResetText} from "../redux/Actions/MovieActions"
import {updatefecha} from "../redux/Actions/TestActions"

const Contenedor = styled.div `
    position: fixed;
    height: 75px;
    background: rgba(0,0,0,.5);
    width: 100%;
    color:white;
    display:flex;
    align-items: center;
    justify-content: space-between;
    >h3{
        margin-left:20px;
        font-family: "Rock Salt", serif;
    }
`
const Fecha = styled.div `

`
class Header extends React.Component {
    state = {
        valueText: ""
    }
    componentDidMount(){
        setInterval(this.props.updatefecha, 1000)
    }
    onChangeSearch = (e) => {
        const {value} = e.target
        if(value) {
            this.props.getSearch(value)
            this.setState({
                valueText: e.target.value
            })
        }else{
            this.onClean()
        }
           
    }
    onClean = (e) => {
        this.props.getResetText()
        this.setState({
           valueText:""
       })
    }
    render(){
        return(
            <Contenedor>
                <h3>PageMovies Blog</h3>
                {this.props.path === "/" && <Search onChangeSearch = {this.onChangeSearch} onClean={this.onClean} valueText={this.state.valueText}/>}
                <Fecha>{this.props.test.fecha.toLocaleString()}</Fecha>
            </Contenedor>
        )
    }
}

const mapStateToProps = ({test}) => {
    return {
        test
    }
}
export default connect (mapStateToProps,{
    getSearch,
    getResetText,
    updatefecha
})(Header)