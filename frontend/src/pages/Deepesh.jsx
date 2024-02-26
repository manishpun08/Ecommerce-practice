import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const mainImg =
  "https://jblstore.com.ph/cdn/shop/files/JBLTune520BT_Blue_1_600x.png?v=1689752682";

const ProductDetails = () => {
  const [img, setImg] = useState(mainImg);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "35px",
          marginTop: "65px",
          background: "",
        }}
      >
        <Grid container className="productDetails">
          {/* using Grid for left side image */}
          <Grid item lg={6} md={6} xs={12} sx={{ background: "" }}>
            <img src={img} alt="Image" width="500px" height="500px" />
          </Grid>

          {/* using Grid for right side name, description, price, etc */}
          <Grid item lg={6} md={6} xs={12}>
            {/* For name*/}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textAlign: "start",
                color: "black",
              }}
            >
              JBL Tune 520BT Wireless headphone
            </Typography>

            {/* For price*/}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "start",
                color: "#D71313",
              }}
            >
              Rs.18000{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  fontWeight: "normal",
                  color: "#c4c4c4",
                }}
              >
                Rs.22000
              </span>
            </Typography>

            {/* For description*/}
            <p style={{ textAlign: "justify", paddingRight: "20px" }}>
              The JBL Wireless Headphones offer a seamless audio experience with
              cutting-edge technology and sleek design. Immerse yourself in
              premium sound quality through Bluetooth connectivity, ensuring
              wireless freedom and convenience. The headphones boast powerful
              drivers that deliver deep bass and crisp highs, enhancing your
              music, movies, and calls. With an ergonomic over-ear design, they
              provide comfort for extended wear, while intuitive controls on the
              ear cups allow for easy playback and call management.
            </p>

            {/* For category and brand*/}
            <Stack gutterBottom flexDirection="row" gap="1rem">
              <Typography sx={{ textAlign: "start" }}>
                Category <Chip label="ELECTRONICS" />
              </Typography>
              <Typography sx={{ textAlign: "start" }}>
                Brand <Chip label="JBL" />
              </Typography>
            </Stack>

            {/* For color text*/}
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ fontWeight: "" }}>Color:</Typography>

              {/* For state change function for black color image */}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "black",
                  color: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setImg(
                    "https://audioshopnepal.com/wp-content/uploads/2023/05/2305231511160.jpeg"
                  );
                }}
              ></Box>

              {/* For state change function for blue color image */}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#2B3467",
                  color: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setImg(
                    "https://jblstore.com.ph/cdn/shop/files/JBLTune520BT_Blue_1_600x.png?v=1689752682"
                  );
                }}
              ></Box>

              {/* For state change function for red color image */}
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#D71313",
                  color: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setImg(
                    "https://appleman.pk/cdn/shop/products/JBL-Tune-700BT-1_1024x.jpg?v=1667818203"
                  );
                }}
              ></Box>
            </Box>

            {/* For quantity field */}
            <Box sx={{ textAlign: "start", marginTop: "20px" }}>
              <TextField label="Quantity" type="number" />
            </Box>

            {/* For add to cart button */}
            <Box sx={{ textAlign: "start", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{ background: "black", color: "white" }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetails;
