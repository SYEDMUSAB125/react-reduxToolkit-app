import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState:[],
    reducers:{
        setUser: (state, action) => {
            state.push(action.payload)
            // console.log(action.payload)
            // console.log(state)
        },
        removeUser: (state,action) => {},
        clearAllUSers:(state,action) => {},
    }
})

export default UserSlice.reducer
export const { setUser, removeUser, clearAllUSers } = UserSlice.actions