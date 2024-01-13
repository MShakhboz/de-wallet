import styled, { css } from "styled-components";
import { StyleProps } from "./type";

const StyledText = styled.p<StyleProps>`
    font-size: 16px;
    color: ${({ color }) => color || "#4D555B"};
    letter-spacing: 0;
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    padding: ${({ padding }) => padding || "0px"};
    margin: ${({ margin }) => margin || "0px"};
    line-height: 21px;
    letter-spacing: 0.01em;

    ${({ dark }) =>
        dark &&
        css`
            color: ${({ ...props }) => props.theme.colors.dark};
        `};
    ${({ light }) =>
        light &&
        css`
            color: ${({ ...props }) => props.theme.colors.white};
        `};
    ${({ success }) =>
        success &&
        css`
            color: ${({ ...props }) => props.theme.colors.light_green};
        `};

    ${({ medium }) =>
        medium &&
        css`
            font-weight: 500;
        `};

    ${({ bold }) =>
        bold &&
        css`
            font-weight: 700;
        `};

    ${({ xsm }) =>
        xsm &&
        css`
            font-size: 0.75rem;
        `};

    ${({ sm }) =>
        sm &&
        css`
            font-size: 0.875rem;
            letter-spacing: 0;
        `};

    ${({ md }) =>
        md &&
        css`
            font-size: 1.125rem;
        `};

    ${({ xl }) =>
        xl &&
        css`
            font-size: 1.25rem;
        `};

    ${({ xxl }) =>
        xxl &&
        css`
            font-size: 1.875rem;
        `};

    ${({ textCenter }) =>
        textCenter &&
        css`
            text-align: center;
        `};
`;

export { StyledText };
