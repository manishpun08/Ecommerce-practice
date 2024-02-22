import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

const ProductCard = () => {
  return (
    <Card
      sx={{
        width: "25%",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <CardMedia
        sx={{ height: 140, marginTop: "7px" }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAPDq_YRBO8SE1r_HnSVlPEotP_RLWGkG1w&usqp=CAU"
        title="product Tv"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            F55
          </Typography>
          <Chip label="samsung" variant="outlined" color="secondary" />
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={"justify"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima
          quasi aliquam omnis deserunt commodi temporibus inventore in iure.
          Velit eaque neque necessitatibus nulla nihil eius exercitationem
          soluta similique harum!{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="success">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
