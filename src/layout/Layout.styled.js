import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    background-color: #fff;
`;

export const Header = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* height: 65px; */
    background-color: #fff;
    /* box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%); */

    & svg {
        width: 52px;
        height: 70px;
    }

    & p {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #374141;
    }

    ${down('md')} {
        display: flex;
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Questions = styled.div`
    /* width: 100%; */
    /* height: max-content; */
    /* overflow-x: auto; */
    display: flex;
    height: max-content;
    width: 100%;
    overflow-y: hidden;
    width: 100%;
    padding: 4px;

    &::-webkit-scrollbar {
        border-radius: 0;
        width: 8px;
        height: 4px;
    }

    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #919196;
        min-width: 83px;
        height: 35px;
        border-radius: 50px;
        cursor: pointer;
    }

    & span.active {
        background: #33bd64;
        color: #fff;
    }
`;

export const Container = styled.div`
    min-width: 100vw;
    background-color: #fff;
    min-height: 100vh;
    display: flex;

    ${down('md')} {
        align-items: center;
        width: 100vw;
        background: #fff;
        margin-top: 65px;
        min-height: calc(100vh - 65px);
    }
`;
