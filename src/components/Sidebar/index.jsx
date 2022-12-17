import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../assets/logo.svg';
import ecliseRunner from '../../assets/eclipse5.png';
import ecliseBG from '../../assets/eclipse6.png';

import * as Styled from './Sidebar.styled';
import Button from '../../components/Button';
import Popup from './Popup';
import { setCurrentQuestion } from '../../pages/Challenge/challengeReducer';
import Timer from '../Timer';
import AnimateSVG from '../AnimateSVG';

const questions = [...Array(15).keys()];

const Sidebar = () => {
    const dispatch = useDispatch();
    const answers = JSON.parse(localStorage.getItem('answers'));

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (i) => {
        dispatch(setCurrentQuestion(i));
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <AnimateSVG svg={Logo} />
                <h2>F-Code</h2>
            </Styled.Header>
            <Styled.Item>
                <h2>Thời gian</h2>
                <Styled.Timer>
                    <img src={ecliseBG} />
                    <img src={ecliseRunner} />
                    <div />
                    <Timer />
                </Styled.Timer>
            </Styled.Item>
            <Styled.Item>
                <h2>Câu hỏi</h2>
                <Styled.Questions>
                    {questions.map((item) => (
                        <Styled.Question
                            key={item}
                            onClick={() => handleClick(item)}
                            className={answers[item] ? 'active' : ''}
                        >
                            {item + 1}
                        </Styled.Question>
                    ))}
                </Styled.Questions>
            </Styled.Item>
            <Styled.Item>
                <Button onClick={handleOpen}>Nộp bài</Button>
                <p>Kiểm tra bài làm kĩ trước khi nộp</p>
            </Styled.Item>

            <Popup open={open} handleClose={handleClose} />
        </Styled.Wrapper>
    );
};

export default Sidebar;
