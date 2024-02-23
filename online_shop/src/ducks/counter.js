import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countValue: 0,
};

export const counterSlice = createSlice({
    name: 'counter', // Name of the slice
    initialState,
    reducers: {
        increment(state) {
            state.countValue += 1;
        },
        decrement(state) {
            state.countValue -= 1;
        },
        reset(state) {
            state.countValue = 0;
        },
    },
     selectors: {
         selectCounter: (state) => state.countValue,
     },
});

export const { increment, decrement, reset } = counterSlice.actions;
//export const selectCount = state => state.counter.countValue;
export const {selectCounter} = counterSlice.selectors;
export default counterSlice.reducer;