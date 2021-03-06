import {combineReducers} from "redux"
import test from "./testReducers"
import estreno from "./movieReducers"
import proximoestreno from "./proximosEstrenosReducers"
import creditos from "./creditosReducers"
import detalles from "./detallesReducers"
import search from "./searchReducers"
import trailers from "./trailerMovieReducers"

export default combineReducers ({
    test,
    estreno,
    proximoestreno,
    creditos,
    detalles,
    search,
    trailers
})