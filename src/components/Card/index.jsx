import React from 'react';
import * as Styled from './Card.styled';

const ANSWERS = [
    {
        type: 'A',
        answer: 'Lựa chọn thứ 1',
    },
    {
        type: 'B',
        answer: 'Lựa chọn thứ 2',
    },
    {
        type: 'C',
        answer: 'Lựa chọn thứ 3',
    },
    {
        type: 'D',
        answer: 'Lựa chọn thứ 4',
    },
];

const Card = () => {
    return (
        <Styled.Wrapper>
            <Styled.Question>
                <h2>Câu hỏi số 1</h2>
                <h1>What number should replace the question marks ?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi nunc,
                    rhoncus ac rutrum in, porta at quam. Nunc ullamcorper euismod lacus, vel
                    facilisis eros venenatis sit amet. Nullam viverra, lectus eu facilisis
                    efficitur, libero metus eleifend est, nec gravida orci sapien non erat. Aenean{' '}
                </p>
            </Styled.Question>
            <Styled.AnswersList>
                {ANSWERS.map((item) => (
                    <Styled.AnswersItem key={item.type}>
                        <span>{item.type}</span>
                        <p>{item.answer}</p>
                    </Styled.AnswersItem>
                ))}
            </Styled.AnswersList>
        </Styled.Wrapper>
    );
};

export default Card;
