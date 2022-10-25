import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    min-width: 100vw;
    background: #f5f5f5;
`;

export const Container = styled.div`
    margin-left: 375px;
    padding: 20px 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
        color: #bdbdbd;
    }
`;
