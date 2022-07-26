import { actionTypes } from "../constants/frutas_constants"

const INITIAL_STATE ={
    frutas:[
        {id: 1, nome:'fruta1', quantidade:5},
        {id: 2, nome:'fruta2', quantidade:1},
        {id: 3, nome:'fruta3', quantidade:52},
    ]
}

const reducers = (state = INITIAL_STATE ,action) =>{

    switch(action.type){
        case actionTypes.ADICIONAR_FRUTA:
            return {frutas:[...state.frutas,{...action.payload}]}
        case actionTypes.REMOVER_FRUTA:
            return {frutas: state.frutas.filter(x => x.id!== action.payload.id)}
        default:
            return state;
    }
}

export {reducers}