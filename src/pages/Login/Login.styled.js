import styled from 'styled-components';
import { between, down } from 'styled-breakpoints';

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    ${down('sm')} {
        flex-direction: column-reverse;
    }
`;

export const LeftContent = styled.div`
    width: 380px;

    & object {
        width: 50px;
        height: 90px;
    }

    ${down('sm')} {
        width: inherit;
        margin-bottom: 50px;
    }

    ${between('sm', 'lg')} {
        & > object {
            display: none;
        }
    }
`;

export const RightContent = styled.div`
    ${between('sm', 'lg')} {
        & > object {
            display: none;
        }
    }

    ${down('sm')} {
        width: inherit;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    & object {
        width: 70px;
        height: 85px;
    }

    ${down('sm')} {
        display: none;
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #000;
    margin-bottom: 22px;

    & span {
        color: #f9af0b;
    }

    ${down('sm')} {
        font-size: 24px;
        text-align: center;
    }
`;

export const Description = styled.ul`
    list-style: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7b7b81;
    margin-bottom: 56px;

    ${down('sm')} {
        padding: 0 16px;
        text-align: center;
    }
`;

export const Input = styled.input`
    width: inherit;
    height: 50px;
    background: #eeeeee;
    border-radius: 12px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    padding: 0 23px;
    box-sizing: border-box;
    color: #61626f;
    border: 2px solid transparent;

    &::placeholder {
        color: #bdbdbd;
    }

    &:focus {
        outline: none;
        border-color: #45ce7b;
        /* box-shadow: 0 0 10px #719ece; */
    }
    ${down('sm')} {
        width: calc(100vw - 32px);
        margin: 0 16px 34px 16px;
    }
`;

export const CodeInput = styled(Input)`
    text-transform: uppercase;
    margin-bottom: 34px;
`;

export const NameInput = styled(Input)`
    text-transform: capitalize;
    margin-bottom: 12px;
`;

export const WrapperButton = styled.div`
    ${down('sm')} {
        display: flex;
        justify-content: center;
    }
`;
