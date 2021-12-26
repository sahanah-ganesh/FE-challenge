import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Label, Input, Select } from "@rebass/forms/styled-components";
import styled from "styled-components";
import { Colors } from "../theme/globalStyle";

const StyledContainer = styled(Box)`
  border-radius: 16px;
  border-color: ${Colors.searchBorder};
  background-color: ${Colors.searchBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 2rem;
`;

const StyledLabel = styled(Label)`
  font-size: 14px;
  font-weight: 900;
  padding-bottom: 0.5rem;
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  height: 56px;
  border-color: ${Colors.grey};
  background-color: ${Colors.white};
  padding: 1rem;
  color: ${Colors.black};
  font-size: 16px;
  font-weight: 900;
  width: 20rem;
`;

const StyledSelect = styled(Select)`
  height: 56px;
  width: 20rem;
  border-radius: 10px;
  border-color: ${Colors.grey};
  background-color: ${Colors.white};
  padding: 1rem;
  color: ${Colors.black};
  font-weight: 900;
`;

const StyledRatingSelect = styled(Select)`
  height: 56px;
  width: 15rem;
  border-radius: 10px;
  border-color: ${Colors.grey};
  background-color: ${Colors.white};
  padding: 1rem;
  color: ${Colors.black};
  font-weight: 900;
`;

const InputContainer = styled(Box)`
  padding: 1rem;
`;

const ButtonContainer = styled(Box)`
  padding: 2.5rem 1rem 1rem 1rem;
`;

const StyledSearchButton = styled(Button)`
  background-color: ${Colors.black};
  color: ${Colors.white};
  height: 56px;
  width: 10rem;
  font-size: 16px;
`;

export const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <StyledContainer>
      <InputContainer>
        <StyledLabel>KEYWORDS</StyledLabel>
        <StyledInput
          placeholder="e.g. Star Wars"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></StyledInput>
      </InputContainer>
      <InputContainer>
        <StyledLabel>GENRE</StyledLabel>
        <StyledSelect defaultValue="Any">
          <option>Any</option>
        </StyledSelect>
      </InputContainer>
      <InputContainer>
        <StyledLabel>MIN RATING</StyledLabel>
        <StyledRatingSelect defaultValue="Any">
          <option>Any</option>
        </StyledRatingSelect>
      </InputContainer>
      <InputContainer>
        <StyledLabel>MAX RATING</StyledLabel>
        <StyledRatingSelect defaultValue="Any">
          <option>Any</option>
        </StyledRatingSelect>
      </InputContainer>
      <ButtonContainer>
        <StyledSearchButton style={{ borderRadius: "10px" }}>
          APPLY FILTERS
        </StyledSearchButton>
      </ButtonContainer>
    </StyledContainer>
  );
};
