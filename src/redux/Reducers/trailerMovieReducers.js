import tipo from "../Actions/Tipo"

const initialState = {
    data:[]
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_TRAILER_MOVIE_FULFILLED:
                const {results} = action.payload.data
                return Object.assign({},state, {
                    data: results
                })
    
        default:
            return state
    }
}