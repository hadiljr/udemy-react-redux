import { configureStore } from '@reduxjs/toolkit'
import frutasReducer from '../slices/frutasSlice'


export const store = configureStore({
  reducer: {
    frutas: frutasReducer,
  }
})