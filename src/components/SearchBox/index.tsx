import { memo } from "react";

import { SearchWrapper, CustomInput } from "./style";
import { TypeIcon } from "../Svg";

const INPUT_PH = "Message";

const SearchBox = ({ onMsgChange }: { onMsgChange: (e: Event) => void }) => {
    return (
        <SearchWrapper>
            <CustomInput onChange={onMsgChange} placeholder={INPUT_PH} />
            <TypeIcon className={"svg_icon type_svg_search"} />
        </SearchWrapper>
    );
};

export default memo(SearchBox);
