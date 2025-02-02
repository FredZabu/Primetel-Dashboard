import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        user: {
            role: '',
            token: ''
        }
    },
    reducers: {
        getUser(state) {
            return state.user.role;
        },
        setUser(state, action) {
            state.user.role = action.payload.role;
            state.user.token = action.payload.token;            
            sessionStorage.setItem("user",
                JSON.stringify({
                    role: action.payload.role,
                    token: action.payload.token
                }))

        },
        logout(state) {
            sessionStorage.clear("user");
            state.user.role = null;
            state.user.role = null;
        }
    }
})

export const { setUser, getUser, logout } = AuthSlice.actions;
export const AuthSliceReducer = AuthSlice.reducer;