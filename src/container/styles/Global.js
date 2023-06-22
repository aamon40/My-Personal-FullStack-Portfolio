import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        width: .4rem;
        height: .4em;
    }

    ::-webkit-scrollbar-track {
    background:rgba(17, 14, 24, 0.173) ;   
    border-radius: 100vw;
    margin-block: .2em;
}

    ::-webkit-scrollbar-thumb {
        background: #DE224A;
        border-radius: 100vw;
    }
        
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(222, 34, 74, 0.5);
    }

    @supports (scrollbar-color: #DE224A  #110e18) {
        * {
        scrollbar-color: #9747ff, #110e18;
        scrollbar-width: auto;
        }
    }
}

:root {
    --bluish-purple: #3a0ca3;
    --dark: #110e18;
    --light-purple: #9169FF;
    --yellow: #f3d27b;
    --soft-red: #DE224A;
    --swiper-navigation-size: 30px;
}

html {
    overflow-x: hidden;
}

body {
    background: #fff;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;

}

p {
    line-height: 1rem;
    letter-spacing: 0.1em;
}

`;

export default GlobalStyles;
