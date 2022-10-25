import React from 'react';
import * as Styled from './Home.styled';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

const Home = () => {
    return (
        <Styled.Wrapper>
            <Sidebar />
            <Styled.Container>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <p>Kết thúc phần làm bài</p>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Home;
