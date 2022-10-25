import React from 'react';
import * as Styled from './Button.styled';

const Button = ({ children = 'Click me!', ...rest }) => {
    return <Styled.Button {...rest}>{children}</Styled.Button>;
};

export default Button;
