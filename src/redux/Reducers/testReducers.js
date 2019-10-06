import tipo from "../Actions/Tipo"
const initialState = {
    fecha: new Date()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tipo.UPDATE_FECHA:
            return Object.assign({},state,{
                fecha: action.payload
            })
        default:
         return state
    }
}
