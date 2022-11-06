import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import * as Styled from './Layout.styled';
import { ReactComponent as FCode } from '../assets/logo.svg';
import { challengeSelector, setCurrentQuestion } from '../pages/Challenge/challengeReducer';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(challengeSelector);
    const { pathname } = useLocation();

    // const questionRef = useRef();
    // questionRef.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

    const handleClick = (i) => {
        dispatch(setCurrentQuestion(i));
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.Logo>
                    <FCode />
                    <p>F-Code</p>
                </Styled.Logo>
                {pathname === '/challenge' && (
                    <Styled.Questions>
                        {[...Array(15).keys()].map((item) => (
                            <span
                                key={item}
                                className={currentQuestion === item ? 'active' : ''}
                                onClick={() => handleClick(item)}
                            >
                                Câu {item + 1}
                            </span>
                        ))}
                    </Styled.Questions>
                )}
            </Styled.Header>
            <Styled.Container>{children}</Styled.Container>
        </Styled.Wrapper>
    );
};

export default Layout;
