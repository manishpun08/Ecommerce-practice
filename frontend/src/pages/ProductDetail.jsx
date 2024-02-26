import { CircularProgress, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import ProductDescription from "../components/ProductDescription";
import ProductImage from "../components/ProductImage";
import { useQuery } from "react-query";
import { getProductDetails } from "../lib/apis";
import { useParams } from "react-router-dom";
import { fallbackImage } from "../constant/general.constant";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const params = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["get-product-details"],
    queryFn: () => {
      return getProductDetails(params?.id);
    },
  });

  // product ko details yeta aauxa
  const productDetails = data?.data?.productDetails;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            paddingBottom: "1rem",
            marginBottom: "3rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          {productDetails?.name}
        </Typography>

        <Grid container justifyContent="space-between">
          <Grid
            item
            md={5}
            sm={12}
            sx={{
              border: "1px solid #ddd",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <ProductImage imageUrl={productDetails?.image || fallbackImage} />
          </Grid>

          <Grid item md={6} sm={12}>
            <ProductDescription {...productDetails} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetail;
