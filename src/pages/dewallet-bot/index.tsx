import { useCallback, useLayoutEffect, useState } from "react";
import { Footer, Modal } from "../../components";
import { Container, OpenModalBtn } from "./style";
import { useModal } from "../../hooks";
import { LoadingContainer, ModalContent } from "./components";

const MENU = "Menu";

const DewalletBot = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { openModal, hideModal, isModalOpened } = useModal();

    const onMsgChange = useCallback((e: Event) => {
        console.log(e, "e");
    }, []);

    const triggerModal = useCallback(
        () => (isModalOpened ? hideModal() : openModal()),
        [hideModal, isModalOpened, openModal]
    );

    useLayoutEffect(() => {
        if (isModalOpened) {
            setIsLoading(true);

            const timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [isModalOpened]);

    return (
        <Container>
            <div className="flex-center mt-64  menu-btn-box">
                <OpenModalBtn title={MENU} onClick={triggerModal} />
            </div>
            <Modal
                content={!isLoading ? <ModalContent /> : <LoadingContainer />}
                isOpen={isModalOpened}
                onClose={hideModal}
            />
            <Footer onMsgChange={onMsgChange} triggerModal={triggerModal} />
        </Container>
    );
};

export default DewalletBot;
