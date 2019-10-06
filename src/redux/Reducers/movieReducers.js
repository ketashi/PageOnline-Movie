import tipo from "../Actions/Tipo"

const initialState = {
    data:[],
    peliculaDestacada:""
}
 export default (state=initialState,action) => {
     switch (action.type) {
         case tipo.GET_ESTRENO_FULFILLED:
            const {results} = action.payload.data
            const peliculaDestacada = results[Math.floor(Math.random()* results.length)]
            return Object.assign({},state,{
                data: results,
                peliculaDestacada
            })
            
         default:
            return state
     }
 }