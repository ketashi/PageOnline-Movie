import React from "react"
import {connect} from "react-redux"

import Header from "../componentes/Header"
import {getCreditosPelicula,getDetallePelicula} from "../redux/Actions/MovieActions"
import Destacados from "../componentes/Destacados"
import Creditos from "../componentes/Creditos"

class PageDetails extends React.Component {
    componentDidMount(){
        const {idmovie} = this.props.match.params
        this.props.getCreditosPelicula(idmovie)
        this.props.getDetallePelicula(idmovie)
    }
    render(){
        return(
            <div>
                <Header/>
                <Destacados peliculas= {this.props.detalles.data}/>
                <Creditos cast={this.props.creditos.data}/>
            </div>
        )
    }
}

const mapStateToProps = ({creditos, detalles}) => {
    return {
        creditos,
        detalles
    }
}
export default connect (mapStateToProps, {
    getCreditosPelicula,
    getDetallePelicula
})(PageDetails)