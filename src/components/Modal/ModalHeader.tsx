import { memo } from "react";
import { ModalHeaderWrapper } from "./style";
import Text from "../Text";
import { CirclePoints } from "../Svg";

const CANCEL = "Cancel";
const NAME = "DeWallet";

const ModalHeader = ({ hideModal }: { hideModal: () => void }) => {
    return (
        <ModalHeaderWrapper>
            <Text className={"cancel_text cursor-pointer"} onClick={hideModal}>
                {CANCEL}
            </Text>
            <Text dark className={"name_text"}>
                {NAME}
            </Text>
            <CirclePoints className={"svg_icon"} />
        </ModalHeaderWrapper>
    );
};

export default memo(ModalHeader);
