import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "60px",
        width: "100vw",
        background: "#AEDEFC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "#fff" }}>
        Copyright @ Nepal Mart 2024
      </Typography>
    </Box>
  );
};

export default Footer;
