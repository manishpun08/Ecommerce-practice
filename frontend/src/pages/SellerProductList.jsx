import { Box, Button } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { getSellerProducts } from "../lib/apis";

const SellerProductList = () => {
  const navigate = useNavigate();
  const goToAddProduct = () => {
    navigate("/add-product");
  };
  const { isLoading, isError, error, data } = useQuery({
    queryKey: "Seller-product-list",
    queryFn: async () => {
      return await getSellerProducts();
    },
  });

  //   header bata  producl list leuna lai
  const productList = data?.data?.productList;

  //   loading
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={goToAddProduct}
        sx={{ marginBottom: "2rem" }}
      >
        Add Product
      </Button>
      <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
    </>
  );
};

export default SellerProductList;
