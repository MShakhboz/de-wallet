import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background: #F4F7FA;
        font-family: 'SFPro Regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }

    .svg_icon {
        display: flex;
        align-items: center;
        justify-content: center;

            & > div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
    }

    .cursor-pointer {
        cursor: pointer !important;
    }

    .mt-16 {
        margin-top: 16px !important;
    }

    .w-100 {
        width: 100% !important;
    }

    .mb-8 {
        margin-bottom: 8px !important;
    }

    .mb-16 {
        margin-bottom: 16px !important;
    }

    .mt-24 {
        margin-top: 24px !important;
    }

    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mt-64 {
        margin-top: 64px !important;
    }

`;

export default GlobalStyle;
