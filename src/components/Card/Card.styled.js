import styled from 'styled-components';
import { between, down, up } from 'styled-breakpoints';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 978px;
    padding: 36px 0;
    justify-content: space-evenly;
    background: #ffffff;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 12px;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;

    a {
        display: none;
    }

    ${down('sm')} {
        width: auto;
        height: auto;
        flex-direction: column;
        padding: 24px 16px;
        box-shadow: none;
        border: none;

        a {
            display: block;
        }
    }

    ${between('sm', 'xl')} {
        width: auto;
        justify-content: center;
        flex-direction: column;
        padding: 36px;
    }
`;

export const Question = styled.div`
    width: 400px;

    & h2 {
        font-weight: 600;
        font-size: 18px;
        line-height: 19px;
        color: #f9af0b;
        margin: 12px 0;
    }

    & img {
        width: inherit;
    }

    & h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #213547;
    }

    & p:not(:first-child) {
        color: #213547;
    }

    & > p:first-child {
        ${up('sm')} {
            display: none;
        }
    }

    /* & p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #21222d;
        margin-top: 15px;
    } */

    ${down('sm')} {
        width: auto;

        & img {
            width: calc(100vw - 32px);
        }
    }
`;
export const AnswersList = styled.div`
    ${down('sm')} {
        margin-top: 36px;
    }
`;

export const AnswersItem = styled.button`
    width: 340px;
    /* height: 56px; */
    padding: 8px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 42px;
    margin-bottom: 20px;

    ${up('sm')} {
        &:last-child {
            margin-bottom: 0;
        }
    }

    & span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #ffffff;
        border-radius: 21px;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #21222d;
        margin-right: 16px;
    }

    & h1,
    & p {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #21222d;
    }

    & img {
        max-width: 200px;
    }

    &:hover {
        background-color: #bdbdbd;
    }

    &:focus,
    &:focus-visible,
    &.active {
        background: #45ce7b;

        h1,
        p {
            color: #fff;
        }
    }
`;
