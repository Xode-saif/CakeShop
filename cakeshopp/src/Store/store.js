import {configureStore} from '@reduxjs/toolkit'
import products from './cartSlice.js'
export const store = configureStore({
    reducer: products

})