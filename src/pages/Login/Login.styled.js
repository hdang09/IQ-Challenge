import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const LeftContent = styled.div`
    width: 380px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    & svg {
        width: 70px;
        height: 85px;
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #21222d;
    margin-bottom: 22px;

    & span {
        color: #f9af0b;
    }
`;

export const Description = styled.ul`
    list-style: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #7b7b81;
    margin-bottom: 56px;
`;

export const Input = styled.input`
    width: inherit;
    height: 50px;
    background: #eeeeee;
    border-radius: 12px;
    border: none;
    color: #bdbdbd;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0 23px;
    margin-bottom: 34px;
    box-sizing: border-box;
`;
