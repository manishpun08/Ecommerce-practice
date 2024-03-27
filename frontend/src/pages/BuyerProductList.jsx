import { Box, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import $axios from "../lib/axios.instance";
import { useSelector } from "react-redux";

const BuyerProductList = () => {
  // fetching redux data
  const { searchText } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["buyer-product-list", currentPage, searchText],
    queryFn: async () => {
      return await $axios.post("/product/list/buyer", {
        page: currentPage,
        limit: 4,
        searchText,
      });
    },
  });

  //   header bata  product list leuna lai
  const productList = data?.data?.productList;

  // for pagination
  const numberOfPages = data?.data?.numberOfPages;

  //   loading
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {productList?.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
      <Stack alignItems="center" mt="2rem">
        <Pagination
          count={numberOfPages}
          page={currentPage}
          color="secondary"
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
        />
      </Stack>
    </>
  );
};

export default BuyerProductList;
