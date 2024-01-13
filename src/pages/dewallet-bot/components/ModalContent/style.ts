import styled from "styled-components";
import { Text } from "../../../../components";
import { StyleProp } from "./type";

const ModalContentContainer = styled.div`
    width: 100%;
`;

const ContentHeader = styled.div`
    display: flex;
    padding: 40px 16px;
    min-height: 138px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    background: linear-gradient(to top, rgba(0, 122, 255, 0.1), transparent);

    .token_text {
        margin-top: -16px;
        color: ${({ ...props }) => props.theme.colors.grey};
    }
`;

const CustomText = styled(Text)`
    color: ${({ ...props }) => props.theme.colors.dark};
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 510;

    span {
        color: ${({ ...props }) => props.theme.colors.grey};
        font-size: 32px;
        font-style: normal;
        font-weight: 510;
    }
`;

const ContentSection = styled.div`
    height: 542px;
    width: 100%;
    background-color: ${({ ...props }) => props.theme.colors.white};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-top: -16px;
    padding: 30px 16px 0;
`;

const TabContent = styled.div<StyleProp>`
    height: ${({ tabId }) => (tabId == "tokens" ? "280px" : "340px")};
    /* height: 56%; */
    overflow-y: auto;
    margin-right: -16px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`;

export {
    ModalContentContainer,
    ContentHeader,
    CustomText,
    ContentSection,
    TabContent,
    BtnWrapper,
};
