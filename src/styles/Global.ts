import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --green100: #30B283;
        --yellow100: #FFB32F;
        --red100: #FF4930;
        --blue100: #1DBCEE;

        --gray100: #2B2B2B;
        --gray50: #848484;
        --gray30: #C4C4C4;
        --gray10: #E7E7E7;
        --gray5: #F3F3F3;

        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html{
        text-rendering: optimizeLegibility;
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--white);
        color: var(--gray100);
        -webkit-font-smoothing: antialiased;   
       
        /* &::-webkit-scrollbar-track {
            background-color: var(--gray800);
        }
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--gray600);
            border-radius: 5px;
        }
        scrollbar-width: thin;
        scrollbar-color: var(--gray600);
        scrollbar-track-color: var(--gray800); */
    }

    body, input, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
    
    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;