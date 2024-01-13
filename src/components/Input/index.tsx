import { memo } from "react";

import { StyledInput } from "./style";
import { Props } from "./type";

const Input = ({ value, onChange, placeholder, ...props }: Props) => {
    const handleChange = (e: any) => {
        const {
            target: { value },
        } = e;
        if (onChange) {
            onChange(value);
        }
    };
    return (
        <StyledInput
            {...props}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default memo(Input);
