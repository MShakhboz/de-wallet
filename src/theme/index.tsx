import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import "./injectFontFamily.css";
import themes from "./themes";

type Props = {
    children: ReactNode;
};

const Theme = ({ children }: Props) => {
    return (
        <ThemeProvider theme={themes}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
