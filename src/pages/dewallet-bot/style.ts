import styled from "styled-components";
import { Button } from "../../components";

const Container = styled.div`
    .menu-btn-box {
        display: none;

        @media only screen and (min-width: 1279px) {
            display: flex;
        }
    }
`;

const OpenModalBtn = styled(Button).attrs({
    width: "200px",
})``;

export { Container, OpenModalBtn };
