import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }

    body{
        -webkit-font-smoothing:  antialiased;
        background: #F6F4F4;
    }
    h1, h2, h3, h4, h4, h5, h6, p, span{
        font-family: 'Roboto', sans-serif
    }

    input, button{
        font-family: 'Roboto', sans-serif
    }
    button{
        cursor: pointer
    }
`;