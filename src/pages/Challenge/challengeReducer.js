import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentQuestion: 0,
    answers: JSON.parse(localStorage.getItem('answers')) || [],
};

const challengeSlice = createSlice({
    name: 'challenge',
    initialState,
    reducers: {
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        setUserAnswers: (state, action) => {
            state.answers[action.payload.num - 1] = action.payload.ans;
            let newAns = JSON.parse(localStorage.getItem('answers')) || [];
            newAns[action.payload.num - 1] = action.payload.ans;
            localStorage.setItem('answers', JSON.stringify(newAns));
        },
    },
});

export const challengeSelector = (state) => state.challenge?.currentQuestion;
export const { setCurrentQuestion, setUserAnswers } = challengeSlice.actions;
export default challengeSlice.reducer;
