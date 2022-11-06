import { post, get } from './apiCaller';

// Token API
export const checkValidToken = () => {
    const url = `/check/${token}`;
    return get(url);
};

export const resetToken = () => {
    const url = `/reset/?token=${token}`;
    return get(url);
};

// User API
export const register = (token, name, studentID) => {
    const url = '/user/register';
    return post(url, { token, name, studentID });
};

export const startTheTest = (token, name, studentID) => {
    const url = '/user/start';
    return get(url, { token, name, studentID });
};

export const submitTheTest = (token, name, studentID, answer = []) => {
    const url = '/user/end';
    return post(url, { token, name, studentID, answer });
};

export const seeScoreBoard = (studentID) => {
    const url = '/user/scoreboard';
    return get(url, {}, { studentID });
};

export const getStudentResult = (studentID) => {
    const url = `/user/${studentID}`;
    return get(url);
};
