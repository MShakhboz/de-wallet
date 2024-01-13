import { memo } from "react";

import ModalHeader from "./ModalHeader";
import { ModalContainer, ModalContent } from "./style";
import { Props } from "./type";

const Modal = ({ content, isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    return (
        <ModalContainer>
            <ModalHeader hideModal={onClose} />
            <ModalContent>{content}</ModalContent>
            {/* <button onClick={onClose}>Close</button> */}
        </ModalContainer>
    );
};

export default memo(Modal);
