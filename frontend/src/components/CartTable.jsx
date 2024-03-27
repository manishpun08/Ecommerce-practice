import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Chip,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import $axios from "../lib/axios.instance";
import { fallbackImage } from "../constant/general.constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openErrorSnackbar } from "../store/slices/snackbarSlice";

const CartTable = ({ cartItem }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  // for removing single cart item
  const { isLoading: removeItemLoading, mutate } = useMutation({
    mutationKey: ["remove-cart-item"],
    mutationFn: async (productId) => {
      return await $axios.delete(`/cart/item/remove/${productId}`);
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries("get-cart-items");
      queryClient.invalidateQueries("get-cart-item-count");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
  // for flushing cart items
  const { isLoading: flushCartLoading, mutate: flushCartMutate } = useMutation({
    mutationKey: ["cart-flush"],
    mutationFn: async () => {
      return await $axios.delete("/cart/flush");
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries("get-cart-items");
      queryClient.invalidateQueries("get-cart-item-count");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
  // for inc and dec cart quantity
  const {
    isLoading: updateCartQuantityLoading,
    mutate: updateCartQuantityMutate,
  } = useMutation({
    mutationKey: ["update-cart-quantity"],
    mutationFn: async ({ productId, action }) => {
      return await $axios.put(`/cart/quantity/update/${productId}`, {
        action,
      });
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries("get-cart-items");
    },
    onError: (error) => {
      // console.log("error");
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    },
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Button
          variant="contained"
          color="error"
          sx={{ marginBottom: "10px" }}
          onClick={() => {
            flushCartMutate();
          }}
        >
          Clear Item
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {(removeItemLoading ||
          flushCartLoading ||
          updateCartQuantityLoading) && <LinearProgress color="secondary" />}

        <TableContainer
          component={Paper}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    S.N
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Image
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Quantity
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Unit Price
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Sub Total
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem?.map((item, index) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <img
                        style={{ width: "100px" }}
                        src={item?.image || fallbackImage}
                        alt={item?.name}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Stack>
                        <Typography>{item?.name}</Typography>
                        <Chip
                          label={item?.brand}
                          variant="outlined"
                          color="secondary"
                        />
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" alignItems="center" spacing={0.2}>
                        <IconButton
                          disabled={
                            updateCartQuantityLoading || item.oderQuantity === 1
                          }
                          onClick={() => {
                            updateCartQuantityMutate({
                              productId: item?.productId,
                              action: "dec",
                            });
                          }}
                        >
                          <RemoveOutlinedIcon />
                        </IconButton>
                        <Typography> {item?.oderQuantity} </Typography>
                        <IconButton
                          disabled={updateCartQuantityLoading}
                          onClick={() => {
                            updateCartQuantityMutate({
                              productId: item?.productId,
                              action: "inc",
                            });
                          }}
                        >
                          <AddOutlinedIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Typography> Rs.{item?.price}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>
                        Rs.{item?.oderQuantity * item?.price}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => {
                          mutate(item?.productId);
                        }}
                      >
                        <ClearOutlinedIcon
                          color="error"
                          sx={{ cursor: "pointer" }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default CartTable;
