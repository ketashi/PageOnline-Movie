import Tipo from "./Tipo"

export const updatefecha = () => {
    return{
        type: Tipo.UPDATE_FECHA,
        payload: new Date()
    }
}