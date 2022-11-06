import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { seeScoreBoard } from '../../utils/productApi';
import { timeConvert } from '../../utils/timeConvert';
// import { data } from './data.json';
import * as Styled from './Rank.styled';

const Rank = () => {
    const [scoreboard, setScoreboard] = useState();

    useEffect(() => {
        const getScoreboard = async () => {
            try {
                // console.count('getScoreboard');
                const studentID = localStorage.getItem('studentID');
                const { data } = await seeScoreBoard(studentID);
                setScoreboard(data.data);
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }
        };

        if (!scoreboard) getScoreboard();
        let intervalID = setInterval(getScoreboard, 30000);

        return () => clearInterval(intervalID);
    }, []);

    const Countdown = () => {
        const [time, setTime] = useState(30);
        if (time >= 0) {
            useEffect(() => {
                const intervalID = setInterval(() => {
                    // console.count('Countdown');
                    setTime((prev) => prev - 1);
                }, 1000);

                return () => clearInterval(intervalID);
            }, [time]);
        }

        return <h3>{time} giây nữa bảng xếp hạng sẽ cập nhật</h3>;
    };

    return (
        <Styled.Wrapper>
            <h2>
                Bảng xếp hạng <span>Finding Apollo</span>
            </h2>
            <h3>
                Bạn đang ở <span>hạng {scoreboard?.studentRank}</span>
            </h3>
            <Countdown />

            <Styled.Table>
                <thead>
                    <tr>
                        <th>Top</th>
                        <th>Tên</th>
                        <th>MSSV</th>
                        <th>Điểm</th>
                        <th>Thời gian</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreboard?.users.map((user, i) => {
                        {
                            /* if (user.name !== '') { */
                        }
                        return (
                            <Styled.BodyRow key={i} isCurrentUser={scoreboard?.studentRank - 1 === i}>
                                <td>{++i}</td>
                                <td>{user.name.replace(/(^\w{1})|(\s+\w{1})/g, (match) => match.toUpperCase())}</td>
                                <td>{user.studentID}</td>
                                <td>{user.score}</td>
                                <td>{timeConvert(user.time)}</td>
                            </Styled.BodyRow>
                        );
                        {
                            /* } */
                        }
                    })}
                </tbody>
            </Styled.Table>
        </Styled.Wrapper>
    );
};

export default Rank;
