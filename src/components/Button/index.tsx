import { ReactNode, memo } from "react";

import { StyledButton } from "./style";

const Button = ({
    title,
    icon,
    className,
    width,
    onClick,
    outline,
    ...props
}: {
    title: string;
    icon?: ReactNode;
    className?: string;
    width?: string;
    onClick: any;
    outline?: boolean;
}) => {
    return (
        <StyledButton
            className={className}
            width={width}
            onClick={onClick}
            outline={outline}
            {...props}
        >
            {icon}
            {title}
        </StyledButton>
    );
};

export default memo(Button);
