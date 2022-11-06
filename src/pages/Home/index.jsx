import React from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../app/authReducer';
import { Link } from 'react-router-dom';
import * as Styled from './Home.styled';
import Logo from '../../assets/logo.svg';
import AnimateSVG from '../../components/AnimateSVG';
import { toast } from 'react-toastify';

const Home = () => {
    const dispatch = useDispatch();

    const validate = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            dispatch(login());
        } else {
            toast.error('Bạn vui lòng quét mã QR để tham gia cuộc thi nhé!');
        }
    };

    return (
        <>
            <Styled.Wrapper>
                <AnimateSVG svg={Logo} />
                <p>
                    Chào mừng các bạn sinh viên đến với cuộc thi <span>Finding Apollo</span> do CLB F-Code tổ chức
                </p>
                <Styled.Buttons>
                    <Link to="/rank">Xem bảng xếp hạng</Link>
                    <Button onClick={validate}>Tiếp tục</Button>
                </Styled.Buttons>
            </Styled.Wrapper>
        </>
    );
};

export default Home;
