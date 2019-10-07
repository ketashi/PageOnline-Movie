import tipo from "./Tipo"
import axios from "axios"

const urlBase = "https://api.themoviedb.org/3/movie/"
const urlSearch = "https://api.themoviedb.org/3/search/movie?"
const key= "aad84e5d95c119df7b6170ae1d65b8d3"
const lenguage = "language=es"

export const getEstrenos = () => dispatch => {
    dispatch ({
        type: tipo.GET_ESTRENO,
        payload: axios.get(`${urlBase}now_playing?api_key=${key}&${lenguage}`)
    })
}

export const getProximoEstrenos = () => dispatch =>{
    dispatch ({
        type: tipo.GET_PROXIMO_ESTRENO,
        payload: axios.get(`${urlBase}upcoming?api_key=${key}&${lenguage}`)
    })
}

export const getCreditosPelicula = (idpelicula) => dispatch =>{
    dispatch({
        type: tipo.GET_CREDITO_PELICULA,
        payload: axios.get(`${urlBase}${idpelicula}/credits?api_key=${key}&${lenguage}`)
    })
}

export const getDetallePelicula = (idpelicula) => dispatch => {
    dispatch({
        type:tipo.GET_DETALLE_PELICULA,
        payload: axios.get(`${urlBase}${idpelicula}?api_key=${key}&${lenguage}`)
    })
}

export const getSearch = (text) => dispatch =>{
    dispatch({
        type:tipo.GET_SEARCH,
        payload: axios.get(`${urlSearch}query=${text}&api_key=${key}&${lenguage}`)
    })
}

export const getResetText = () =>{
    return({
        type: tipo.GET_RESET_DATA
    })
}

export const getTrailerMovie = (idpelicula) => dispatch=> {
    dispatch({
        type: tipo.GET_TRAILER_MOVIE,
        payload: axios.get(`${urlBase}${idpelicula}/videos?api_key=${key}&${lenguage}`)
    })
}