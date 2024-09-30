import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState:[],
    reducers:{
        setUser: (state, action) => {},
        removeUser: (state,action) => {},
        clearAllUSers:(state,action) => {},
    }
})

export default UserSlice.reducer