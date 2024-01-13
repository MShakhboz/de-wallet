import { useCallback, useRef } from "react";
import { Footer, Modal } from "../../components";
import { Container, OpenModalBtn } from "./style";
import { useModal } from "../../hooks";
import { ModalContent } from "./components";

const MENU = "Menu";

const DewalletBot = () => {
    const { openModal, hideModal, isModalOpened } = useModal();

    const onMsgChange = useCallback((e: Event) => {
        console.log(e, "e");
    }, []);

    const triggerModal = useCallback(
        () => (isModalOpened ? hideModal() : openModal()),
        [hideModal, isModalOpened, openModal]
    );

    return (
        <Container>
            <div className="flex-center mt-64  menu-btn-box">
                <OpenModalBtn title={MENU} onClick={triggerModal} />
            </div>
            <Modal
                content={<ModalContent />}
                isOpen={isModalOpened}
                onClose={hideModal}
            />
            <Footer onMsgChange={onMsgChange} triggerModal={triggerModal} />
        </Container>
    );
};

export default DewalletBot;
