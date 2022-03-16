import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, //here you can add your slaces
  },
})