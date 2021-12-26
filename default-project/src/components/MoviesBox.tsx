import React, { useState, useEffect } from "react";
import { Box } from "rebass";
import { Label } from "@rebass/forms";
import axios from "axios";
import styled from "styled-components";
import { Colors } from "../theme/globalStyle";
import { MovieCard } from "./MovieCard";

const StyledContainer = styled(Box)`
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
`;

const StyledLabel = styled(Label)`
  color: ${Colors.black};
  font-size: 18px;
  font-weight: 900;
`;
export const MoviesBox: React.FC = () => {
  const [movieData, setMovieData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const movieResult = await axios({
        method: "GET",
        url: "http://localhost:3000/movies",
      });
      setMovieData(movieResult.data);
      const genreResult = await axios({
        method: "GET",
        url: "http://localhost:3000/genres",
      });
      setGenreData(genreResult.data);
    };
    fetchData();
  }, []);

  console.log(genreData && genreData);
  return (
    <StyledContainer>
      <Box>
        <StyledLabel>SHOWING 15 MOVIES</StyledLabel>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          {movieData.map((movie: any, index: number) => {
            if (index < 15) {
              let result: any = [];
              movie.genre_ids.forEach((id: number) => {
                genreData.map((genre: any) => {
                  if (genre.id === id) {
                    result.push(genre);
                  }
                  return result;
                });
              });
              return <MovieCard data={movie} genre={result} />;
            }
            return null;
          })}
        </Box>
      </Box>
    </StyledContainer>
  );
};
