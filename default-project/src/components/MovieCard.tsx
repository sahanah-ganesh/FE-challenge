import React from "react";
import { Image, Text, Box } from "rebass";
import styled from "styled-components";
import { Colors } from "../theme/globalStyle";
// import Icon from "../assets/Icon.svg";

const StyledCard = styled(Box)`
  background-color: ${Colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 250px:
`;

const StyledImage = styled(Image)`
  height: 250px;
  width: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 0;
`;

// const StyledIcon = styled(Image)`
//   height: 15px;
//   width: 17px;
//   position: fixed;
//   z-index: 999;
//   right: 38rem;
//   top: 38rem;
// `;

// const StyledRating = styled(Text)`
//   font-size: 16px;
//   color: ${Colors.white};
//   font-weight: 900;
//   position: fixed;
//   z-index: 999;
//   right: 36.5rem;
//   top: 38rem;
// `;

const StyledText = styled(Text)`
  font-size: 24px;
  font-weight: 900;
  color: ${Colors.black};
  word-wrap: break-word;
  max-width: 250px;
  padding: 0.5rem;
`;

const StyledDescription = styled(Text)`
  font-size: 14px;
  color: ${Colors.grey};
  padding: 0.5rem;
  font-weight: 900;
`;

interface MovieCardProps {
  data: any;
  genre: any;
}
export const MovieCard: React.FC<MovieCardProps> = ({ data, genre }) => {
  return (
    <StyledCard>
      <Box>
        <Box>
          <StyledImage src={`${data.poster_path}`} />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <StyledText>
            {data.title}
            {` (${data.release_date.split("-").splice(0, 1).join("")})`}
          </StyledText>
          <StyledDescription>
            {genre.map((type: any, index: any) => {
              if (index === genre.length - 1) {
                return ` ${type.name} •`;
              }
              return `${type.name},`;
            })}
            {` ${data.runtime}`}
          </StyledDescription>
        </Box>
      </Box>
    </StyledCard>
  );
};
