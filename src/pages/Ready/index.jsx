import React, { useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { BsQuestionCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import * as Styled from './Ready.styled';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import AnimateSVG from '../../components/AnimateSVG';
import Question from '../../assets/ready.svg';
// import { resetToken, startTheTest } from '../../utils/productApi';
// import { toast } from 'react-toastify';

const LIST = [
    {
        icon: <BiTimeFive />,
        name: "Bạn sẽ có 10' để hoàn thành thử thách",
    },
    {
        icon: <BsQuestionCircleFill />,
        name: 'Tổng cộng là 20 câu hỏi cần hoàn thành',
    },
    {
        icon: <BsFillCheckCircleFill />,
        name: 'Chỉ chọn một đáp án đúng duy nhất',
    },
];

const Ready = () => {
    const navigate = useNavigate();

    const startChallenge = () => {
        // const name = localStorage.getItem('name');
        // const studentID = localStorage.getItem('studentID');
        // try {
        // const token = JSON.parse(localStorage.getItem('token'));
        // const res = await startTheTest(token, name, studentID);
        navigate('/challenge');
        // } catch (error) {
        //     console.log(error);
        //     toast.error(error.response.data.message);
        // }
    };
    return (
        <Styled.Wrapper>
            <AnimateSVG svg={Question} />
            <Styled.RightContent>
                <Styled.Header>
                    <AnimateSVG svg={Logo} />
                    <h2>F-Code</h2>
                </Styled.Header>
                <Styled.Title>Chuẩn bị sẵn sàng</Styled.Title>
                <Styled.List>
                    {LIST.map((item) => (
                        <Styled.Item key={item.name}>
                            {item.icon}
                            <p>{item.name}</p>
                        </Styled.Item>
                    ))}
                </Styled.List>
                <Styled.WrapperButton>
                    <Button onClick={startChallenge}>Bắt đầu thử thách</Button>
                </Styled.WrapperButton>
            </Styled.RightContent>
        </Styled.Wrapper>
    );
};

export default Ready;
