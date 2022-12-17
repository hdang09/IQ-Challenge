import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import * as Styled from './Login.styled';
import Button from '../../components/Button';
import AnimateSVG from '../../components/AnimateSVG';
import Bulb from '../../assets/login.svg';
import { useNavigate } from 'react-router-dom';
import { register, resetToken } from '../../utils/productApi';

const Login = () => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    // localStorage.removeItem('')

    // useEffect(() => {
    //     const resetUserToken = async () => {
    //         try {
    //             const res = await resetToken();
    //             console.log(res);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    //     resetUserToken();
    // }, []);

    const validate = async () => {
        const isValid = /^(S|s)[E|A|S|s|e|a]+([0-9]{6})$/.test(code);
        if (isValid) {
            try {
                const token = JSON.parse(localStorage.getItem('token'));

                // Uppercase name
                const arr = name.split(' ');
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                }
                const newName = arr.join(' ');

                // Uppercase Student ID
                const newCode = code.toUpperCase();

                const res = await register(token, newName, newCode);
                if (res.status === 200) {
                    localStorage.setItem('answers', '[]');
                    localStorage.setItem('name', newName);
                    localStorage.setItem('studentID', newCode);
                    navigate('/ready');
                }
            } catch (err) {
                console.log(err);
                toast.error(err.response.data.message);
            }
        } else {
            toast.error('Bạn vui lòng nhập đúng MSSV giúp F-Code nhé!');
        }
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
