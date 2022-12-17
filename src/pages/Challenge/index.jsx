import React, { useState, useEffect } from 'react';
import * as Styled from './Challenge.styled';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import data from './data.json';
import { useSelector } from 'react-redux';
import { challengeSelector } from '../Challenge/challengeReducer';
import { toast } from 'react-toastify';
import { startTheTest } from '../../utils/productApi';

const Challenge = () => {
    const [questions, setQuestions] = useState();
    const [timeStart, setTimeStart] = useState(JSON.parse(localStorage.getItem('time_start') || 0));
    const currentIndexQuestion = useSelector(challengeSelector);

    useEffect(() => {
        const startTheChallenge = async () => {
            try {
                const name = localStorage.getItem('name');
                const studentID = localStorage.getItem('studentID');
                const token = JSON.parse(localStorage.getItem('token'));
                const { data } = await startTheTest(token, name, studentID);
                setQuestions(data.data.questions);
                setTimeStart(data.data.timeStart);
                localStorage.setItem('time_start', JSON.stringify(data.data.timeStart));
            } catch (error) {
                toast.error(error.response.data.message);
                console.log('Error: ', error);
            }
        };
        startTheChallenge();
    }, []);

    return (
        <Styled.Wrapper>
            <Sidebar />
            <Styled.Container>
                {questions && (
                    <Card
                        data={questions[currentIndexQuestion]}
                        index={currentIndexQuestion}
                        key={questions._id}
                        timeStart={timeStart}
                        isLong={questions[currentIndexQuestion].isLong}
                    />
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Challenge;
