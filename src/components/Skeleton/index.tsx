import { memo } from "react";
import { SkeletonContainer } from "./style";
import { Props } from "./type";

// Example usage
const Skeleton = ({ width, height, rd, ...props }: Props) => {
    return (
        <SkeletonContainer width={width} height={height} rd={rd} {...props} />
    );
};

export default memo(Skeleton);
