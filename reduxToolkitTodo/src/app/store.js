import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; 
//yr upar vala isliye likha hai ki store ko knowledge honi chaiye reducers ki ye bhi kuch hai   

export const store = configureStore({  //isme key vlaue daalte hai bus
    reducer: todoReducer
})   

