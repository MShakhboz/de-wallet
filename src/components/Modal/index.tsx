import { ReactNode, memo } from "react";

import ModalHeader from "./ModalHeader";
import { ModalContainer } from "./style";
import { Props } from "./type";

const Modal = ({ content, isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    return (
        <ModalContainer>
            <ModalHeader hideModal={onClose} />
            {content}
            {/* <button onClick={onClose}>Close</button> */}
        </ModalContainer>
    );
};

export default memo(Modal);
