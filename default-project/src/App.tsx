import React from "react";
import { NavLogo } from "./components/NavLogo";
import { SearchInput } from "./components/SearchInput";
import GlobalStyle from "./theme/globalStyle";
import { Box } from "rebass";
import styled from "styled-components";
import { MoviesBox } from "./components/MoviesBox";

const StyledContainer = styled(Box)`
  padding: 1rem 3rem 1rem 3rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <NavLogo />
        <SearchInput />
        <MoviesBox />
      </StyledContainer>
    </>
  );
}

export default App;
