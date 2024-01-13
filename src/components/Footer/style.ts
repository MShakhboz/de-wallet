import styled from "styled-components";

const FooterWrapper = styled.div`
    width: 100%;
    position: absolute;
    min-height: 45px;
    display: flex;
    padding: 6px 5px;
    align-items: flex-start;
    background-color: ${({ ...props }) => props.theme.colors.slight_white};
    bottom: 0;

    @media only screen and (min-width: 1279px) {
        display: none;
    }
`;

const FooterBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .menu_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 17px;
        background: ${({ ...props }) => props.theme.colors.link_color};
        padding: 5px 13px 5px 8px;
        gap: 4px;
        cursor: pointer;

        p {
            color: ${({ ...props }) => props.theme.colors.white};
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.416px;
            font-family: SF Pro Rounded;
        }

        &:active {
            opacity: 0.8;
        }
    }
`;

export { FooterWrapper, FooterBox };
