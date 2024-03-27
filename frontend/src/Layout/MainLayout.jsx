import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box, Container, Stack } from "@mui/material";
import CustomSnackbar from "../components/CustomSnackbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          margin: "6rem 0",
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </Box>

      <CustomSnackbar />
      <Footer />
    </>
  );
};

export default MainLayout;
