import React from 'react';
import * as Styled from './Success.styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Trophy } from '../../assets/trophy.svg';
import { BsFacebook } from 'react-icons/bs';

const RESULT_LIST = [
    {
        name: 'Thời gian hoàn thành',
        result: '7m16s',
    },
    {
        name: 'Số câu trả lời đúng',
        result: '22/22',
    },
    {
        name: 'Vị trí xếp hạng',
        result: '13/300',
    },
];

const Success = () => {
    return (
        <Styled.Wrapper>
            <Trophy />
            <Styled.RightContent>
                <Styled.Header>
                    <Logo />
                    <h2>F-Code</h2>
                </Styled.Header>
                <Styled.Title>
                    Chúc mừng bạn đã hoàn thành thử thách <span>IQ Challenge</span>
                </Styled.Title>
                <Styled.Subtitle>Kết quả bạn đã đạt được:</Styled.Subtitle>
                <Styled.ResultList>
                    {RESULT_LIST.map((item) => (
                        <Styled.ResultItem key={item.name}>
                            <h3>{item.name}</h3>
                            <p>{item.result}</p>
                        </Styled.ResultItem>
                    ))}
                </Styled.ResultList>
                <Styled.MoreInfo>
                    <p>Tìm hiểu thêm về CLB tại:</p>
                    <Styled.Facebook>
                        <BsFacebook color="#5599FF" />
                        <a href="https://www.facebook.com/fcodefpt">Facebook fanpage F-Code</a>
                    </Styled.Facebook>
                </Styled.MoreInfo>
            </Styled.RightContent>
        </Styled.Wrapper>
    );
};

export default Success;
