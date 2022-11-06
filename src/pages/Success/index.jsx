import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import * as Styled from './Success.styled';
import Logo from '../../assets/logo.svg';
import AnimateSVG from '../../components/AnimateSVG';
import Trophy from '../../assets/trophy.svg';
import { timeConvert } from '../../utils/timeConvert';

const Success = () => {
    const RESULT_LIST = [
        {
            name: 'Thời gian hoàn thành',
            result: timeConvert(Date.now() - JSON.parse(localStorage.getItem('time_start'))),
        },
        {
            name: 'Số câu trả lời đúng',
            result: JSON.parse(localStorage.getItem('count')),
        },
    ];

    return (
        <Styled.Wrapper>
            <AnimateSVG svg={Trophy} />
            <Styled.RightContent>
                <Styled.Header>
                    <AnimateSVG svg={Logo} />
                    <h2>F-Code</h2>
                </Styled.Header>
                <Styled.Title>
                    Chúc mừng bạn đã hoàn thành thử thách <span>Finding Apollo</span>
                </Styled.Title>
                <Styled.Subtitle>Kết quả bạn đã đạt được:</Styled.Subtitle>
                <Styled.ResultList>
                    {RESULT_LIST.map((item) => (
                        <Styled.ResultItem key={item.name}>
                            <h3>{item.name}</h3>
                            <div>{item.result}</div>
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
