import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 978px;
    height: 387px;
    justify-content: space-evenly;
    background: #ffffff;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 12px;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
`;

export const Question = styled.div`
    width: 400px;

    & h2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #f9af0b;
    }

    & h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin-top: 18px;
    }

    & p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #21222d;
        margin-top: 15px;
    }
`;
export const AnswersList = styled.div``;

export const AnswersItem = styled.button`
    width: 350px;
    height: 56px;
    padding: 8px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 42px;
    margin-bottom: 20px;

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
    }

    & p {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-left: 16px;
        color: #21222d;
    }

    &:hover {
        background-color: #bdbdbd;
    }

    &:focus,
    &:focus-visible {
        background: #45ce7b;
    }
`;
