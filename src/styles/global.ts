import { createGlobalStyle } from 'styled-components';

import ImagemFundo from '../assets/imagem-fundo.svg';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5 url(${ImagemFundo}) no-repeat 70% top;
  }

  body, input, button{
    -webkit-font-smoothing: antialiased;
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

`;
