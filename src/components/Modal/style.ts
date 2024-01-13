import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(100%) translateX(-50%);
  }
  to {
    transform: translateY(0) translateX(-50%);
  }
`;

const ModalContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100%;
    max-height: 781px;
    min-height: 666px;
    background-color: white;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    animation: ${slideIn} 0.3s ease-out, ${fadeIn} 0.3s ease-out;

    transform: translateX(-50%);

    @media only screen and (min-width: 1279px) {
        max-width: 390px;
        padding-bottom: 40px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
`;

const ModalHeaderWrapper = styled.div`
    min-height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px;

    .cancel_text {
        color: ${({ ...props }) => props.theme.colors.link_color};
    }

    .name_text {
        font-size: 17px;
        font-style: normal;
        font-weight: 590;
        line-height: 22px;
        letter-spacing: -0.43px;
        font-family: SF Pro Rounded;

        &::after {
            content: "bot";
            color: ${({ ...props }) => props.theme.colors.grey};
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: -0.078px;
            display: block;
            text-align: center;
            margin-top: -5px;
        }
    }
`;

export { ModalContainer, ModalHeaderWrapper };
