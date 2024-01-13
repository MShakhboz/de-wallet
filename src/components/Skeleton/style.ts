import styled, { keyframes } from "styled-components";
import { StyleProps } from "./type";

// Define a loading animation
const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled Skeleton component
const SkeletonContainer = styled.div<StyleProps>`
    max-width: ${({ width }) => width || "100%"};
    width: 100%;
    height: ${({ height }) => height || "16px"};
    /* background: linear-gradient(90deg, #eee, #f5f5f5, #eee); */
    background: ${({ ...props }) =>
        `linear-gradient(90deg, ${props.theme.colors.loading_grey}, #f5f5f5, ${props.theme.colors.loading_grey})`};
    background-size: 200% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: ${({ rd }) => rd || "4px"};
    margin-bottom: 8px;
`;

export { SkeletonContainer };
