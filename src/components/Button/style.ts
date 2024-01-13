import styled from "styled-components";
import { StyleProps } from "./type";

const StyledButton = styled.div<StyleProps>`
    display: flex;
    max-width: ${({ width }) => width || "450px"};
    width: 100%;
    height: 50px;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background-color: ${({ outline, ...props }) =>
        outline
            ? props.theme.colors.link_color_op
            : props.theme.colors.link_color};
    border-radius: 40px;
    cursor: pointer;

    color: ${({ outline, ...props }) =>
        outline ? props.theme.colors.link_color : props.theme.colors.white};
    font-size: 15px;
    font-style: normal;
    font-weight: 590;
    /* line-height: 22px;  */
    /* letter-spacing: -0.43px; */

    &:active {
        opacity: 0.8;
    }
`;

export { StyledButton };
