import React from "react";
import Logo from "../assets/Logo.svg";
import { Box, Image } from "rebass";

export const NavLogo: React.FC = () => {
  return (
    <Box style={{ paddingBottom: "2rem" }}>
      <Image alt="Movie club Logo" src={Logo} />
    </Box>
  );
};
