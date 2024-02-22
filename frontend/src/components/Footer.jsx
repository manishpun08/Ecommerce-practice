import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "100px",
        width: "100vw",
        background: "#1B3C73",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ color: "#fff" }}>
        Copyright @ Nepal Mart 2024
      </Typography>
    </Box>
  );
};

export default Footer;
