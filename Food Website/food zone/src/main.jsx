import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
 
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
body{
  background-color: #323343;
  color: #fff; 
}
`;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
