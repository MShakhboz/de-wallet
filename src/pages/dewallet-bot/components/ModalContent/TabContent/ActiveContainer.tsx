import { memo } from "react";
import { Container, Row } from "./style";
import { Text } from "../../../../../components";
import {
    BitcoinIcon,
    DepositIcon,
    TetherIcon,
    TonIcon,
    WithdrawIcon,
} from "../../../../../components/Svg";
import moment from "moment";
import { ActiveElmProps } from "./type";

const DATA = [
    {
        date: new Date(),
        transactions: [
            {
                img: <TonIcon className={"svg_icon"} />,
                currency: "TON",
                date: new Date(),
                status: "Withdraw",
                code: "To TjkLk...5FGs",
                transactionAmt: "9",
            },
            {
                img: <TonIcon className={"svg_icon"} />,
                currency: "TON",
                date: new Date(),
                status: "Deposit",
                code: "From mutantape.ton",
                transactionAmt: "9",
            },
            {
                img: <TonIcon className={"svg_icon"} />,
                currency: "TON",
                date: new Date(),
                status: "Deposit",
                code: "From mutantape.ton",
                transactionAmt: "9",
            },
        ],
    },
    {
        date: moment().subtract(1, "month"),
        transactions: [
            {
                img: <TonIcon className={"svg_icon"} />,
                currency: "TON",
                name: "Toncoin",
                price: 2889.32,
                date: moment().subtract(1, "month"),
                quantity: 1253,
                status: "Deposit",
                code: "From mutantape.ton",
                transactionAmt: "9",
            },
        ],
    },
    {
        date: moment().subtract(2, "month"),
        transactions: [
            {
                img: <TonIcon className={"svg_icon"} />,
                currency: "TON",
                name: "Toncoin",
                price: 2889.32,
                date: moment().subtract(2, "month"),
                quantity: 1253,
                status: "Deposit",
                code: "From mutantape.ton",
                transactionAmt: "9",
            },
        ],
    },
];

export const ActiveRow = ({ item }: any) => {
    return (
        <Row>
            <div className="row-col-1">
                {item?.img}
                <div className="icon_transaction">
                    {item?.status === "Withdraw" && (
                        <WithdrawIcon className={"svg_icon"} />
                    )}

                    {item?.status === "Deposit" && (
                        <DepositIcon className={"svg_icon"} />
                    )}
                </div>
            </div>
            <div className="row-col-2">
                <Text dark>{item?.status}</Text>
                <Text sm color={"rgba(142, 142, 147, 1)"}>
                    {item?.code}
                </Text>
            </div>
            <div className="row-col-3">
                <Text
                    dark={item?.status === "Withdraw"}
                    success={item?.status === "Deposit"}
                >
                    {item?.status === "Withdraw" ? "-" : "+"}
                    {new Intl.NumberFormat("en-GB", {
                        maximumFractionDigits: 2,
                        currencyDisplay: "narrowSymbol",
                    }).format(item?.transactionAmt)}{" "}
                    <span>{item?.currency}</span>
                </Text>
                <Text sm color={"rgba(142, 142, 147, 1)"}>
                    {moment(item?.date).format("DD MMM hh:mm")}
                </Text>
            </div>
        </Row>
    );
};

const ActiveContainer = () => {
    return (
        <Container>
            {DATA.map((elm: any) => (
                <>
                    {elm?.date && (
                        <Text className={"mb-16"}>
                            {moment(elm?.date).format("MMMM")}
                        </Text>
                    )}
                    {elm?.transactions &&
                        elm?.transactions.map(
                            (item: ActiveElmProps, index: number) => (
                                <ActiveRow
                                    item={item}
                                    key={`active_elm_u_key_${index + 1}`}
                                />
                            )
                        )}
                </>
            ))}
        </Container>
    );
};

export default memo(ActiveContainer);
