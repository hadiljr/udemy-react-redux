import { createSlice } from "@reduxjs/toolkit";

const frutasSlice = createSlice({
    name:'frutas',
    initialState: [
        {id: 1, nome:'fruta1R', quantidade:5},
        {id: 2, nome:'fruta2R', quantidade:1},
        {id: 3, nome:'fruta3R', quantidade:52},],
    reducers:{
        frutaAdded(state,action){
            state.push(
                action.payload
            )
        },
        frutaRemoved(state,action){
            return state.filter(x => x.id !== action.payload.id)
        }
    }
})

export const { frutaAdded, frutaRemoved } = frutasSlice.actions
export default frutasSlice.reducer