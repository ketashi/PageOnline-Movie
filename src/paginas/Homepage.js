import React from "react";
import {connect} from "react-redux"

import Header from "../componentes/Header"
import {getEstrenos,getProximoEstrenos} from "../redux/Actions/MovieActions"
import Destacado from "../componentes/Destacados";
import Movie from "../componentes/Estreno";
import Title from "../componentes/Title.js"
import ListSearch from "../componentes/listSearch"



class HomePage extends React.Component {
    componentDidMount(){
        this.props.getEstrenos()
        this.props.getProximoEstrenos()
    }

    renderListMovie = () =>{
      const data = this.props.search.data
      if(data.length === 0){
        return(
          <div>
            <ListSearch listSearch = {data}/>
            <Destacado peliculas={this.props.estreno.peliculaDestacada}></Destacado>
            <Title>Peliculas en Estrenos:</Title>
            <Movie peliculas = {this.props.estreno.data}></Movie>
            <Title>Peliculas Proximamente:</Title>
            <Movie peliculas = {this.props.proximoestreno.data}></Movie>
          </div>
        )
      }else{
        return <ListSearch listSearch = {data}/>
      }
    }
  render() {
    return (
      <div>
        <Header path={this.props.match.path}/>
        {this.renderListMovie()}
      </div>
    );
  }
}

const mapStateToProps = ({estreno,proximoestreno,search}) => {
  return {
    estreno,
    proximoestreno,
    search
  }
}

export default connect (mapStateToProps, {
  getEstrenos,
  getProximoEstrenos
})(HomePage);
