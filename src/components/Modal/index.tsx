import { ReactNode, memo } from "react";

import ModalHeader from "./ModalHeader";
import { ModalContainer } from "./style";

const Modal = ({
    content,
    isOpen,
    onClose,
}: {
    content: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}) => {
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
