import Button from '../Button';
import Transition from './Transition';
import * as Styled from './Sidebar.styled';

import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import { submitTheTest } from '../../utils/productApi';
import { toast } from 'react-toastify';

const Popup = ({ open = false, handleClose = () => {} }) => {
    const navigate = useNavigate();
    const answers = JSON.parse(localStorage.getItem('answers'));
    const isAnswerAll = answers.every((ans) => ans != null);

    const handleSubmit = async () => {
        const name = localStorage.getItem('name');
        const code = localStorage.getItem('studentID');
        const token = JSON.parse(localStorage.getItem('token'));

        try {
            const res = await submitTheTest(token, name, code, answers);
            navigate('/success');
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <Styled.DialogWrapper>
                <h1>
                    Xác nhận hoàn thành thử thách <span>Finding Apollo</span>
                </h1>
                <p>
                    Bạn nên kiểm tra bài làm trước khi nộp để chắc chắn trả lời đầy đủ các câu hỏi. Sau khi Nộp bài,
                    hành động này không thể hoàn tác.
                </p>
                {!isAnswerAll && (
                    <h2>
                        <span>Lưu ý:</span> Bạn chưa hoàn thành hết 15 câu hỏi
                    </h2>
                )}
                <h2>Bạn chắc chắn muốn nộp bài chứ?</h2>
                <div>
                    <button onClick={handleClose}>Quay lại</button>
                    <Button onClick={handleSubmit}>Nộp bài</Button>
                </div>
            </Styled.DialogWrapper>
        </Dialog>
    );
};

export default Popup;
