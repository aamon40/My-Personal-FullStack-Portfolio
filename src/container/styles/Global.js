import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500&?family=Anonymous+Pro:ital@0;1&family=Montserrat:wght@100;300;400;500;600;700;800&display=swap'); */


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
    background:#110e18 ;   
    border-radius: 100vw;
    margin-block: .2em;
}

    ::-webkit-scrollbar-thumb {
        background: #9747ff;
        border-radius: 100vw;
    }
        
    ::-webkit-scrollbar-thumb:hover {
        background:rgba(145, 105, 255, 0.8) ;
    }

    @supports (scrollbar-color: #9747ff  #110e18) {
        * {
        scrollbar-color: #9747ff, #110e18;
        scrollbar-width: auto;
        }
    }
}

:root {
    --bluish-purple: #3a0ca3;
    --dark: #110e18;
    --light-purple: #9747ff;
    --yellow: #f3d27b;
    
}

html {
    overflow-x: hidden;
}

body {
    background: #e7ecef;
    font-family: 'Montserrat', sans-serif;

}

p {
    line-height: 1rem;
    letter-spacing: 0.1em;
}

`;

export default GlobalStyles;
