import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import challengeReducer from '../pages/Challenge/challengeReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        challenge: challengeReducer,
    },
});

export default store;
