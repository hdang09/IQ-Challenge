import React, { useEffect, useState } from 'react';
import { timeConvert } from '../../utils/timeConvert';
import * as Styled from './Timer.styled';

const Timer = ({ timeStart }) => {
    let startOfTime = timeStart || JSON.parse(localStorage.getItem('time_start'));
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(Date.now() - startOfTime);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return <Styled.Clock>{timeConvert(time)}</Styled.Clock>;
};

export default Timer;
