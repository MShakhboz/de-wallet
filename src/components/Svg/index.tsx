import { ReactSVG } from "react-svg";

import hamburgerIcon from "../../assets/icons/hamburger_icon.svg";
import attachIcon from "../../assets/icons/attach_icon.svg";
import typeIcon from "../../assets/icons/type_icon.svg";
import voiceIcon from "../../assets/icons/voice_icon.svg";
import circlePoint from "../../assets/icons/circle_points.svg";
import upIcon from "../../assets/icons/up_icon.svg";

import tonIcon from "../../assets/icons/ton_icon.svg";
import bitcoinIcon from "../../assets/icons/bitcoin_icon.svg";
import tetherIcon from "../../assets/icons/tether_icon.svg";
import withdrawIcon from "../../assets/icons/withdraw_icon.svg";
import depositIcon from "../../assets/icons/deposit_icon.svg";
import sendIcon from "../../assets/icons/send_icon.svg";
import buyIcon from "../../assets/icons/buy_icon.svg";

const HamburgerIcon = ({ ...props }) => (
    <ReactSVG src={hamburgerIcon} {...props} />
);

const AttachIcon = ({ ...props }) => <ReactSVG src={attachIcon} {...props} />;

const TypeIcon = ({ ...props }) => <ReactSVG src={typeIcon} {...props} />;

const VoiceIcon = ({ ...props }) => <ReactSVG src={voiceIcon} {...props} />;

const CirclePoints = ({ ...props }) => (
    <ReactSVG src={circlePoint} {...props} />
);

const UpIcon = ({ ...props }) => <ReactSVG src={upIcon} {...props} />;

const TonIcon = ({ ...props }) => <ReactSVG src={tonIcon} {...props} />;

const BitcoinIcon = ({ ...props }) => <ReactSVG src={bitcoinIcon} {...props} />;

const TetherIcon = ({ ...props }) => <ReactSVG src={tetherIcon} {...props} />;

const WithdrawIcon = ({ ...props }) => (
    <ReactSVG src={withdrawIcon} {...props} />
);

const DepositIcon = ({ ...props }) => <ReactSVG src={depositIcon} {...props} />;

const SendIcon = ({ ...props }) => <ReactSVG src={sendIcon} {...props} />;

const BuyIcon = ({ ...props }) => <ReactSVG src={buyIcon} {...props} />;

export {
    HamburgerIcon,
    AttachIcon,
    TypeIcon,
    VoiceIcon,
    CirclePoints,
    UpIcon,
    TonIcon,
    BitcoinIcon,
    TetherIcon,
    WithdrawIcon,
    DepositIcon,
    SendIcon,
    BuyIcon,
};
