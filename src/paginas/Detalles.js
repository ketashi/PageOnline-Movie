import React from "react"
import {connect} from "react-redux"

import Header from "../componentes/Header"
import {getCreditosPelicula,getDetallePelicula,getTrailerMovie} from "../redux/Actions/MovieActions"
import Destacados from "../componentes/DestacadoDetails"
import Creditos from "../componentes/Creditos"

class PageDetails extends React.Component {
    componentDidMount(){
        const {idmovie} = this.props.match.params
        this.props.getCreditosPelicula(idmovie)
        this.props.getDetallePelicula(idmovie)
        this.props.getTrailerMovie(idmovie)

        console.log(this.props.trailers.data)
    }
    render(){
        return(
            <div>
                <Header/>
                <Destacados peliculas= {this.props.detalles.data} trailer={this.props.trailers.data}/>
                <Creditos cast={this.props.creditos.data}/>
            </div>
        )
    }
}

const mapStateToProps = ({creditos, detalles,trailers}) => {
    return {
        creditos,
        detalles,
        trailers
    }
}
export default connect (mapStateToProps, {
    getCreditosPelicula,
    getDetallePelicula,
    getTrailerMovie
})(PageDetails)