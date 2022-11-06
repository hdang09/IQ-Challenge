import styled from 'styled-components';
import { Header, Title, Description } from '../Login/Login.styled';
import { down } from 'styled-breakpoints';

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    ${down('sm')} {
        flex-direction: column;
    }
`;

export const RightContent = styled.div`
    width: 520px;
    padding: 22px 16px 0;

    ${down('sm')} {
        width: auto;
    }
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

export const Subtitle = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin: 42px 0 10px;
    color: #919196;
`;

export const ResultList = styled.ul`
    margin-bottom: 30px;
`;

export const ResultItem = styled.li`
    display: flex;
    border-width: 1px 0px;
    border-style: solid;
    border-color: #e0e0e0;
    padding: 20px 10px;

    & h3 {
        flex: 1;
        font-weight: 500;
        font-size: 16px;
        color: #000;
    }

    & div {
        font-weight: 500;
        font-size: 20px;
        color: #45ce7b;
    }
`;

export const MoreInfo = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #7b7b81;
    margin-bottom: 10px;
`;

export const Facebook = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    & svg {
        width: 24px;
        height: 24px;
    }

    & a {
        margin-left: 16px;
        color: #7b7b81;
    }
`;

export { Header, Title };
