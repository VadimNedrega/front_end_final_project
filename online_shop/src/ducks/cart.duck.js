import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        saveCartItemToReduxStore(state, action) {
//            state.cartItems = [...state.cartItems, action.payload];
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.productKey === newItem.productKey);
            if (existingItemIndex === -1) {
                state.cartItems.push(newItem);
            } else {
                console.log('Item already exists in the cart!');
            }
        },
        removeCartItemFromReduxStore(state, action) {
            state.cartItems = state.cartItems.filter(item => item.productKey !== action.payload);
        },
        getCartItemsFromReduxStore(state, action) {
            //state.cartItems = action.payload;
        },
        clearReduxStore(state) {
            state.cartItems = [];
        },
    },
    selectors: {
        selectCart: (state) => state.cartItems,
    },
});

export const {
    saveCartItemToReduxStore,
    removeCartItemFromReduxStore,
    getCartItemsFromReduxStore,
    clearReduxStore,
} = cartSlice.actions;

export const {selectCart} = cartSlice.selectors;

export default cartSlice.reducer;
