import { createGlobalStyle } from "styled-components";

export const Colors = {
  backgroundGrey: "#E5E5E5",
  black: "#000000",
  grey: "#CCCCCC",
  white: "#FFFFFF",
  searchBorder: "#F5F5F5",
  searchBackground: "#EEEEEE",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto Condensed";
    height: 100%;
    width: 100%;
    background-color: ${Colors.backgroundGrey}
  }
`;

export default GlobalStyle;
