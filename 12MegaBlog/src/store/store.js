import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'; 

const store = configureStore({  // here reducers
    reducer: {
       auth : authSlice, //khud
    },
    
});

export default store;