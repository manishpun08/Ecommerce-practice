import { Box, Stack } from "@mui/material";
import React from "react";
import BuyerProductList from "./BuyerProductList";
import SellerProductList from "./SellerProductList";
import SearchBar from "../components/SearchBar";

const ProductList = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <>
      <Stack
        fullwidth
        sx={{
          margin: "2rem 0",
          alignItems: "flex-end",
        }}
      >
        <SearchBar />
      </Stack>
      <Box>
        {userRole === "buyer" ? <BuyerProductList /> : <SellerProductList />}
      </Box>
    </>
  );
};

export default ProductList;
