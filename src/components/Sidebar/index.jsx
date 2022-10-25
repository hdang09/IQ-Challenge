import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ecliseRunner from '../../assets/eclipse5.png';
import ecliseBG from '../../assets/eclipse6.png';

import * as Styled from './Sidebar.styled';
import Button from '../../components/Button';
import Popup from './Popup';

const questions = Array.from({ length: 15 }, (_, i) => i + 1);

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = (idx) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Logo />
                <h2>F-Code</h2>
            </Styled.Header>
            <Styled.Item>
                <h2>Thời gian</h2>
                <Styled.Timer>
                    <img src={ecliseBG} />
                    <img src={ecliseRunner} />
                    <div />
                    <span>15:00</span>
                </Styled.Timer>
            </Styled.Item>
            <Styled.Item>
                <h2>Câu hỏi</h2>
                <Styled.Questions>
                    {questions.map((item) => (
                        <Styled.Question key={item}>{item}</Styled.Question>
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
