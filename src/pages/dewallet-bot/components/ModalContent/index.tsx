import { memo, useCallback, useMemo, useState } from "react";
import {
    ContentHeader,
    ModalContentContainer,
    CustomText,
    ContentSection,
    TabContent,
    BtnWrapper,
} from "./style";
import { Button, Tabs, Text } from "../../../../components";
import { BuyIcon, SendIcon, UpIcon } from "../../../../components/Svg";
import { ActiveContainer, TokensContainer } from "./TabContent";
import { TabProps } from "./type";

const TABS = [
    { title: "Tokens", content: <TokensContainer />, id: "tokens" },
    { title: "Active", content: <ActiveContainer />, id: "active" },
];

const BUTTON_T = "Buy DFC";
const BUTTON_D = "Deposit";
const BUTTON_S = "Send";
const BUTTON_B = "Buy";

const ModalContent = ({
    amount = 2934.32,
    token = "TjkLk...5FGs",
}: {
    amount?: number | bigint;
    token?: string;
}) => {
    const [tab, setTab] = useState<TabProps>(TABS[0]);

    const DECIMAL_PART = useMemo(() => {
        const dec = String(amount).split(".")[1];
        if (dec) return dec.slice(0, 2);
        return "00";
    }, [amount]);

    const selectTab = useCallback(
        (ind: number) => setTab(TABS.find((elm, index) => index == ind)),
        []
    );

    return (
        <ModalContentContainer>
            <ContentHeader>
                <CustomText>
                    {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                        currencyDisplay: "narrowSymbol",
                    }).format(amount)}
                    <span>.{DECIMAL_PART}</span>
                </CustomText>
                <Text className={"token_text"}>{token}</Text>
            </ContentHeader>
            <ContentSection>
                <BtnWrapper>
                    <Button
                        title={BUTTON_D}
                        icon={<UpIcon className={"svg_icon"} />}
                        width={"131px"}
                        onClick={() => console.log("")}
                    />
                    <Button
                        title={BUTTON_S}
                        icon={<SendIcon className={"svg_icon"} />}
                        width={"131px"}
                        onClick={() => console.log("")}
                        outline
                    />
                    <Button
                        title={BUTTON_B}
                        icon={<BuyIcon className={"svg_icon"} />}
                        width={"80px"}
                        onClick={() => console.log("")}
                        outline
                    />
                </BtnWrapper>
                {tab?.id === "tokens" && (
                    <div className={"w-100 flex-center"}>
                        <Button
                            title={BUTTON_T}
                            icon={<UpIcon className={"svg_icon"} />}
                            className={"mt-16"}
                            onClick={() => console.log("")}
                        />
                    </div>
                )}
                <Tabs className={"mt-16"} tabs={TABS} onTabSelect={selectTab} />
                <TabContent className="w-100 mt-16" tabId={tab?.id}>
                    {tab?.content}
                </TabContent>
            </ContentSection>
        </ModalContentContainer>
    );
};

export default memo(ModalContent);
