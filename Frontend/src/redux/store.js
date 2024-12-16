import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartslice.js'
export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})