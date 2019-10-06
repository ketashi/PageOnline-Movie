import tipo from "../Actions/Tipo"

const initialState = {
    data:[]
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_CREDITO_PELICULA_FULFILLED:
            const {cast} = action.payload.data 
            return Object.assign({},state, {
                data: cast
            })
    
        default:
            return state
    }
}