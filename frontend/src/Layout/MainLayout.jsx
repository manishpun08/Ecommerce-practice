import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Container, Stack } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Stack>
          <Outlet />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
