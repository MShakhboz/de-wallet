import styled from "styled-components";
import Input from "../Input";

const SearchWrapper = styled.div`
    position: relative;
    /* max-width: 208px; */

    .type_svg_search {
        position: absolute;
        right: 8px;
        top: 6px;
    }
`;

const CustomInput = styled(Input)`
    padding-right: 30px;
`;

export { SearchWrapper, CustomInput };
