import { ReactNode } from "react";

export type ActiveElmProps = {
    img: ReactNode;
    currency: string;
    date: any;
    status: string;
    code: string;
    transactionAmt: number | string;
};
