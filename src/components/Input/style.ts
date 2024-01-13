import styled from "styled-components";

const StyledInput = styled.input`
    padding: 6px 8px 6px 12px;
    width: 100%;
    border-radius: 17px;
    color: ${({ ...props }) => props.theme.colors.dark};
    border: 0.33px solid ${({ ...props }) => props.theme.colors.border_grey};
    background: ${({ ...props }) => props.theme.colors.white};
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 117.647% */
    letter-spacing: -0.442px;
    outline: none;

    &::placeholder {
        color: ${({ ...props }) => props.theme.colors.dark};
        color: #3c3c434d;
        font-size: 1.0625rem;
        font-weight: 400;
    }
`;

export { StyledInput };
