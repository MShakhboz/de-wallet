import { memo } from "react";
import { FooterWrapper, FooterBox } from "./style";
import { AttachIcon, HamburgerIcon, VoiceIcon } from "../Svg";
import Text from "../Text";
import SearchBox from "../SearchBox";
import { Props } from "./type";

const MENU = "Menu";

const Footer = ({ onMsgChange, triggerModal }: Props) => {
    return (
        <FooterWrapper>
            <FooterBox>
                <div className="menu_box" onClick={triggerModal}>
                    <HamburgerIcon className={"svg_icon"} />
                    <Text>{MENU}</Text>
                </div>
                <div>
                    <AttachIcon className={"svg_icon cursor-pointer"} />
                </div>
                <div>
                    <SearchBox onMsgChange={onMsgChange} />
                </div>
                <div>
                    <VoiceIcon className={"svg_icon cursor-pointer"} />
                </div>
            </FooterBox>
        </FooterWrapper>
    );
};

export default memo(Footer);
