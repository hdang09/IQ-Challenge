import { down } from 'styled-breakpoints';
import styled from 'styled-components';
export const Wrapper = styled.div`
    width: 50vw;
    background-color: #fff;
    /* max-height: 100vh; */

    text-align: center;
    margin: auto;

    h2 {
        font-weight: 700;
        text-align: center;
        font-size: 32px;
        margin: 22px 0;

        span {
            color: #f9af0b;
        }
    }

    h3 {
        color: #919196;

        span {
            color: #45ce7b;
        }
    }

    ${down('md')} {
        width: inherit;
        height: inherit;

        h2 {
            color: #000;
            font-size: 26px;
            margin-bottom: 6px;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-top: 18px;

    & thead tr th {
        background: #45ce7b;
        color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        transition: background 0.3s ease;
        padding: 16px 0;
    }

    & tbody tr td {
        padding: 16px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        transition: background 0.3s;
        text-align: center;
    }

    /* & tbody tr td:nth-child(2) {
        color: #45ce7b;
    } */
`;

export const BodyRow = styled.tr`
    & td {
        ${(props) => (props.isCurrentUser ? 'background: #fafafa; color: #45ce7b' : 'background: #fff')}
    }
`;
