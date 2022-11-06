import React, { useState, useEffect } from 'react';

import Popup from '../Sidebar/Popup';
import * as Styled from './Card.styled';
import { useDispatch } from 'react-redux';
import { setCurrentQuestion, setUserAnswers } from '../../pages/Challenge/challengeReducer';
import questionImgDemo from '../../assets/questionImgDemo.png';
import Timer from '../Timer';

const Card = ({ data, index, timeStart, isLong, key }) => {
    const dispatch = useDispatch();
    const choices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [open, setOpen] = useState(false);
    const answersFromLocal = JSON.parse(localStorage.getItem('answers')) || [];
    const [reRender, setReRender] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeNextQuestion = () => {
        dispatch(setCurrentQuestion(index));
    };

    const handleUserAnswers = (num, ans) => {
        setReRender(!reRender);
        dispatch(setUserAnswers({ num, ans }));
    };

    const showLongOrShort = (item) => {
        if (item.length > 75) {
            return <p>{item}</p>;
        } else {
            return <h1>{item}</h1>;
        }
    };

    useEffect(() => {}, [reRender]);

    return (
        <Styled.Wrapper key={key}>
            <Styled.Question>
                <Timer timeStart={timeStart} />
                <h2>Câu hỏi số {++index}</h2>
                {/* // ! Fake image */}
                {data.question.startsWith('http') ? <img src={questionImgDemo} /> : showLongOrShort(data.question)}
                {/* {data.question.map((item) => showImgOrText(item, 'question'))} */}
            </Styled.Question>
            <Styled.AnswersList>
                {data.multipleChoice.map((item, idx) => (
                    <Styled.AnswersItem
                        key={item.type}
                        onClick={() => handleUserAnswers(index, idx + 1)}
                        className={idx + 1 === answersFromLocal[index - 1] ? 'active' : ''}
                    >
                        <span>{choices[idx]}</span>
                        {data.question.startsWith('http') ? <p>{choices[idx]}</p> : <p>{item}</p>}
                    </Styled.AnswersItem>
                ))}
            </Styled.AnswersList>
            {index === 10 ? <a onClick={handleOpen}>Nộp bài</a> : <a onClick={changeNextQuestion}>Tiếp theo</a>}
            <Popup open={open} handleClose={handleClose} />
        </Styled.Wrapper>
    );
};

export default Card;
