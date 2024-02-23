import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../ducks/counter';

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    devTools: true,
});

export default store;