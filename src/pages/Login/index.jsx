import { useState, useEffect, useRef } from 'react';

import Logo from '../../assets/logo.svg';
import * as Styled from './Login.styled';
import Button from '../../components/Button';
import AnimateSVG from '../../components/AnimateSVG';
import Bulb from '../../assets/login.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const validate = () => {
        localStorage.setItem('answers', '[]');
        localStorage.setItem('name', name);
        localStorage.setItem('studentID', code);
        navigate('/ready');
    };

    return (
        <Styled.Wrapper>
            <Styled.LeftContent>
                <Styled.Header>
                    <AnimateSVG svg={Logo} />
                    <h2>F-Code</h2>
                </Styled.Header>
                <Styled.Title>
                    Nhập <span>Họ tên, MSSV</span> của bạn
                </Styled.Title>
                <Styled.Description>
                    Chấp nhận tham gia thử thách bằng cách điền mã số sinh viên và tra cứu kết quả sau khi hoàn thành
                </Styled.Description>
                <Styled.NameInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 && validate()}
                    placeholder="Nguyễn Văn A"
                />
                <Styled.CodeInput
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 && validate()}
                    placeholder="SE180000"
                />
                <Styled.WrapperButton>
                    <Button onClick={validate}>Tiếp tục</Button>
                </Styled.WrapperButton>
            </Styled.LeftContent>
            <Styled.RightContent>
                <AnimateSVG svg={Bulb} />
            </Styled.RightContent>
        </Styled.Wrapper>
    );
};

export default Login;
