import React, { useState, useEffect } from 'react';
import * as Styled from './Challenge.styled';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import data from '../../data.json';
import { useSelector } from 'react-redux';
import { challengeSelector } from '../Challenge/challengeReducer';

const Challenge = () => {
    const [questions, setQuestions] = useState();
    const [timeStart, setTimeStart] = useState(JSON.parse(localStorage.getItem('time_start') || 0));
    const currentIndexQuestion = useSelector(challengeSelector);

    const randomQuestionKit = Math.floor(Math.random() * 278);
    localStorage.setItem('question_kit', JSON.parse(randomQuestionKit));

    useEffect(() => {
        setQuestions(data.data.user[randomQuestionKit].questions);
        setTimeStart(Date.now());
        localStorage.setItem('time_start', JSON.stringify(Date.now()));
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
