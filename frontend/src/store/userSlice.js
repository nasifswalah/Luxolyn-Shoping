import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authStart: (state) => {
            state.loading = true;
        },
        authFailure: (state) => {
            state.loading = false;
        },
        authSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        logoutStart: (state) => {
            state.loading = true;
        },
        logOutFailure: (state) => {
            state.loading = false;
        },
        logOutSuccess: (state) => {
            state.loading = false;
            state.user = null;
        },
    },
});

export const { authStart, authFailure, authSuccess, logoutStart, logOutFailure, logOutSuccess } = userSlice.actions;

export default userSlice.reducer;