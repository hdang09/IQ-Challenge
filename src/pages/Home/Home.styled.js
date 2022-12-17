import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 65px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & object {
        margin-top: -50px;
        width: 250px;
        height: 350px;
    }

    & p {
        text-align: center;
        margin: 0px 0 45px;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        padding: 0 16px;
        color: #000;

        span {
            font-weight: 600;
            color: #45ce7b;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
        margin-left: 24px;
    }
`;
