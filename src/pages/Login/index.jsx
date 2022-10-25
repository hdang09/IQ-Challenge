import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Bulb } from '../../assets/login.svg';
import * as Styled from './Login.styled';
import Button from '../../components/Button';

const Login = () => {
    return (
        <Styled.Wrapper>
            <Styled.LeftContent>
                <Styled.Header>
                    <Logo />
                    <h2>F-Code</h2>
                </Styled.Header>
                <Styled.Title>
                    Nhập <span>MSSV</span> của bạn
                </Styled.Title>
                <Styled.Description>
                    Chấp nhận tham gia thử thách bằng cách điền mã số sinh viên và tra cứu kết quả
                    sau khi hoàn thành
                </Styled.Description>
                <Styled.Input />
                <Button>
                    <Link to="/ready">Tiếp tục</Link>
                </Button>
            </Styled.LeftContent>
            <Bulb />
        </Styled.Wrapper>
    );
};

export default Login;
