import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        name: "",
        email: "",
        id: ""
    },
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload._id;
        },
        removeUser: (state) => {
            state.name = "";
            state.email = "";
            state.id = ""
        }
    }
});

export const { addUser, removeUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
