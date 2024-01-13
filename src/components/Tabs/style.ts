import styled from "styled-components";

const TabsContainer = styled.div`
    width: 100%;
    display: flex;
    height: 32px;
    padding: 3px;
    justify-content: center;
    align-items: center;
    background-color: ${({ ...props }) => props.theme.colors.slight_white};
    border-radius: 8.91px;

    .active {
        font-family: SFPro Bold;
        border-radius: 6.93px;
        border: 0.5px solid ${({ ...props }) => props.theme.colors.border_grey};
        background: ${({ ...props }) => props.theme.colors.white};
        box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04),
            0px 3px 8px 0px rgba(0, 0, 0, 0.12);

        span {
            font-weight: 590;
        }
    }
`;

const TabBox = styled.div`
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 5px 0px;
    cursor: pointer;

    span {
        color: ${({ ...props }) => props.theme.colors.dark};
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.078px;
    }
`;

export { TabsContainer, TabBox };
