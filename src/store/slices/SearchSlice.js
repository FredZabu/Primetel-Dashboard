import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: ""
    },
    reducers: {
        handleSearch(state, action) {
            state.search = action.payload;
        }
    }
})

export const { handleSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;