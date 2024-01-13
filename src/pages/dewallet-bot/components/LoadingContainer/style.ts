import styled from "styled-components";

const LoadingBox = styled.div`
    width: 100%;
    padding: 16px;

    header {
        height: 136px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    section {
        width: 100%;

        .btn_box {
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }

        .tab_box {
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .table {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .row-col-1 {
        width: 100%;
        flex-basis: 20%;
    }

    .row-col-2 {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        flex-basis: 50%;
    }

    .row-col-3 {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        flex-basis: 30%;
    }
`;

export { LoadingBox, Row };
