import { memo } from "react";
import { Container, Row } from "./style";
import { Text } from "../../../../../components";
import {
    BitcoinIcon,
    TetherIcon,
    TonIcon,
} from "../../../../../components/Svg";

const DATA = [
    {
        img: <TonIcon className={"svg_icon"} />,
        currency: "TON",
        name: "Toncoin",
        price: 2889.32,
        date: new Date(),
        quantity: 1253,
    },
    {
        img: <BitcoinIcon className={"svg_icon"} />,
        currency: "DFC",
        name: "Bitcoin",
        price: 2889.32,
        date: new Date(),
        quantity: 1253,
    },
    {
        img: <TetherIcon className={"svg_icon"} />,
        currency: "USDT",
        name: "Tether",
        price: 2889.32,
        date: new Date(),
        quantity: 1253,
    },
];

export const TokenRow = ({ elm }: any) => {
    return (
        <Row>
            <div className="row-col-1">{elm?.img}</div>
            <div className="row-col-2">
                <Text dark>
                    {new Intl.NumberFormat("en-GB", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                        currencyDisplay: "narrowSymbol",
                    }).format(elm?.quantity)}{" "}
                    <span>{elm?.currency}</span>
                </Text>
                <Text sm color={"rgba(142, 142, 147, 1)"}>
                    {elm?.name}
                </Text>
            </div>
            <div className="row-col-3">
                <Text dark>
                    {new Intl.NumberFormat("en-GB", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                        currencyDisplay: "narrowSymbol",
                    }).format(elm?.price)}
                </Text>
            </div>
        </Row>
    );
};

const TokensContainer = () => {
    return (
        <Container>
            {DATA.map((elm) => (
                <TokenRow elm={elm} />
            ))}
        </Container>
    );
};

export default memo(TokensContainer);
