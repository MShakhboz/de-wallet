import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding-bottom: 40px;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 0;

    .row-col-1 {
        position: relative;
        display: flex;
        flex-basis: 20%;

        .icon_transaction {
            position: absolute;
            bottom: 0;
            left: 26px;
        }
    }
    .row-col-2 {
        display: flex;
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

export { Container, Row };
