import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'open sans condensed';
    padding: 20px 60px;
    @media screen and (max-width:800px){
        padding:10px;
    }
}
a{
    text-decoration: none;
    color: black;
    transition:0.5s;
}
a:hover{
    color: pink;
}

*{
    box-sizing: border-box;
}
  
`;
