import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        name: "",
        email: "",
        id: "",
        IorC : -1
    },
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload._id;
            state.IorC = action.payload.id;
            
        },
        removeUser: (state) => {
            state.name = "";
            state.email = "";
            state.id = ""
            state.IorC = -1
        }
    }
});

export const { addUser, removeUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
