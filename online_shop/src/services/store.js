import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../ducks/counter';
import cartReducer from '../ducks/cart.duck'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartReducer,
    },
    devTools: true,
});

export default store;