import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('time_start');
            localStorage.removeItem('name');
            localStorage.removeItem('studentID');
            localStorage.removeItem('answers');
        },
    },
});

export const authSelector = (state) => state.auth?.isAuthenticated;
export const { login, signOut } = loginSlice.actions;
export default loginSlice.reducer;
