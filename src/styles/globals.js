import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
    :root {
        --blue: #485696;
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: "League Spartan", sans-serif;
        background: #F8F9FA;
    }

    body * {
        color: #252525;
    }
`;