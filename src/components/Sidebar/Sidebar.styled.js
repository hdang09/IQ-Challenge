import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    width: 375px;
    height: 100vh;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

    ${down('md')} {
        display: none;
    }

    ${between('md', 'lg')} {
        width: 325px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & object {
        width: 70px;
        height: 85px;
    }

    & h2 {
        font-weight: 800;
        font-size: 22px;
        line-height: 22px;
        color: #374141;
    }
`;

export const Item = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    padding: 32px;
    border-top: 1px solid #e0e0e0;

    & h2,
    & > p {
        text-align: center;
        margin-bottom: 12px;
        color: #000;
    }

    & > p {
        margin-top: 20px;
        color: #bdbdbd;
    }
`;

export const Timer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 26px;
    width: 142px;
    height: 142px;

    & img {
        position: absolute;
    }

    & div {
        position: absolute;
        width: 106px;
        height: 106px;
        border-radius: 1000px;
        background: #e8f6ec;
    }

    & span {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #33bd64;
        z-index: 1;
    }
`;

export const Questions = styled.div`
    width: 250px;
    display: flex;
    flex-wrap: wrap;
`;

export const Question = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 114px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    color: #bdbdbd;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &.active {
        color: #33bd64;
    }
`;

export const DialogWrapper = styled.div`
    padding: 52px 36px 32px;
    position: relative;

    & h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #21222d;
        margin-bottom: 20px;

        span {
            color: #45ce7b;
        }
    }

    & p {
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #7b7b81;
        margin-bottom: 20px;
    }

    & h2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #7b7b81;
        margin-bottom: 20px;

        span {
            color: #f9af0b;
        }
    }

    & > div {
        float: right;

        ${down('sm')} {
            justify-content: space-between;
            width: 100%;
            display: flex;
        }
    }

    & > div > button:first-child {
        height: 50px;
        font-size: 18px;
        color: #45ce7b;
        background-color: transparent;
        padding: 0 36px;

        ${down('sm')} {
            padding: 0;
        }
    }
`;
