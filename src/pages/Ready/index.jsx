import React from 'react';
import * as Styled from './Ready.styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Question } from '../../assets/ready.svg';
import { BiTimeFive } from 'react-icons/bi';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../app/authReducer';

const LIST = [
    {
        icon: <BiTimeFive />,
        name: "Bạn sẽ có 10' để hoàn thành thử thách",
    },
    {
        icon: <BiTimeFive />,
        name: 'Tổng cộng là 20 câu hỏi cần hoàn thành',
    },
    {
        icon: <BiTimeFive />,
        name: 'Chỉ chọn một đáp án đúng duy nhất',
    },
];

const Ready = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(login());
    };
    return (
        <Styled.Wrapper>
            <Question />
            <Styled.RightContent>
                <Styled.Header>
                    <Logo />
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
                <Button onClick={handleClick}>
                    <Link to="/">Bắt đầu thử thách</Link>
                </Button>
            </Styled.RightContent>
        </Styled.Wrapper>
    );
};

export default Ready;
