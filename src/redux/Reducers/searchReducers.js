import tipo from "../Actions/Tipo"

const initialState = {
    data:[]
}

export default (state=initialState, action) => {
    switch (action.type) {
        case tipo.GET_SEARCH_FULFILLED:
            const {results} = action.payload.data
             return Object.assign({},state,{
                 data:results
             })
        case tipo.GET_RESET_DATA:
            return Object.assign({},state,{
                data:[]
            })
        default:
            return state
    }
}