import tipo from "../Actions/Tipo"

const initialState = {
    data: ""
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_DETALLE_PELICULA_FULFILLED:
            const {data} = action.payload
            return Object.assign({},state,{
                data
            })
    
        default:
            return state
    }
}
