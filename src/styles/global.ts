import { createGlobalStyle } from "styled-components";
import GitIcon from "../assets/Giticon.svg";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F0F5 url(${GitIcon}) no-repeat 70% top;
    -webkkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serfif;
  }

  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
