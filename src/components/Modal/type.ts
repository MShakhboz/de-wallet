import { ReactNode } from "react";

export type Props = {
    content: ReactNode;
    isOpen: boolean;
    onClose: () => void;
};
