import { memo } from "react";
import { StyledText } from "./style";

const Text = (props: any) => {
    return <StyledText {...props} />;
};

export default memo(Text);
