import Button from '../Button';
import Transition from './Transition';
import * as Styled from './Sidebar.styled';

import Dialog from '@mui/material/Dialog';
import { Link } from 'react-router-dom';

const Popup = ({ open = false, handleClose = () => {} }) => {
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
                    Xác nhận hoàn thành thử thách <span>IQ Challenge</span>
                </h1>
                <p>
                    Bạn nên kiểm tra bài làm trước khi nộp để chắc chắn trả lời đầy đủ các câu hỏi.
                    Sau khi Nộp bài, hành động này không thể hoàn tác.
                </p>
                <h2>Bạn chắc chắn muốn nộp bài chứ?</h2>
                <div>
                    <button onClick={handleClose}>Quay lại</button>
                    <Button>
                        <Link to="/success">Nộp bài</Link>
                    </Button>
                </div>
            </Styled.DialogWrapper>
        </Dialog>
    );
};

export default Popup;
