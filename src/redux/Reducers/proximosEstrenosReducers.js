import tipo from "../Actions/Tipo"

const initialState = {
    data:[]
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_PROXIMO_ESTRENO_FULFILLED:
            const {results} = action.payload.data
            return Object.assign({},state, {
                data: results
            })
    
        default:
            return state
    }
}