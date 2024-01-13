import { memo } from "react";
import styled, { css } from "styled-components";

const StyledText = styled.p<any>`
    font-size: 16px;
    color: ${({ color }) => color || "#4D555B"};
    letter-spacing: 0;
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    padding: ${({ padding }) => padding || "0px"};
    margin: ${({ margin }) => margin || "0px"};
    line-height: 21px;
    letter-spacing: 0.01em;
    ${({ danger }) =>
        danger &&
        css`
            color: #ff446c;
        `};
    ${({ dark }) =>
        dark &&
        css`
            color: #000;
        `};
    ${({ light }) =>
        light &&
        css`
            color: #ffffff;
        `};
    ${({ success }) =>
        success &&
        css`
            color: ${({ ...props }) => props.theme.colors.light_green};
        `};

    ${({ warning }) =>
        warning &&
        css`
            color: #ffa844;
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
            font-size: 12px;
        `};

    ${({ sm }) =>
        sm &&
        css`
            font-size: 14px;
            letter-spacing: 0;
        `};

    ${({ md }) =>
        md &&
        css`
            font-size: 18px;
        `};

    ${({ xl }) =>
        xl &&
        css`
            font-size: 20px;
        `};

    ${({ xxl }) =>
        xxl &&
        css`
            font-size: 30px;
        `};

    ${({ textCenter }) =>
        textCenter &&
        css`
            text-align: center;
        `};
`;

const Text = (props: any) => {
    return <StyledText {...props} />;
};

export default memo(Text);
