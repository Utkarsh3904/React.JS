import { createSlice } from '@reduxjs/toolkit'; 


const initialState ={
    status : false, 
    userData : null, 
}

const authSlice = createSlice({
    name : "auth", // name of the slice
    initialState,
    reducers :{
        login: (state, action) => {
            state.status =true;
            state.userData = action.payload.userData;
        },
        logout:(state)=>{   //no need of action here
            state.status = false,
            state.userData = null;
        }
    }

})

export const { login, logout } = authSlice.actions; // destructure the actions
export default authSlice.reducer;