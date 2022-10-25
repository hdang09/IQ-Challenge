import styled from 'styled-components';
import { Header, Title, Description } from '../Login/Login.styled';

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const RightContent = styled.div`
    width: 425px;
`;

export const List = styled(Description)`
    list-style: none;
    padding-top: 22px;
`;

export const Item = styled.li`
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    & svg {
        fill: #45ce7b;
        width: 25px;
        height: 25px;
    }

    & p {
        margin: 0;
        margin-left: 16px;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #7b7b81;
    }
`;

export { Header, Title };
