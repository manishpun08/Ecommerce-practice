import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import snackBarReducer from "./slices/snackbarSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    snackbar: snackBarReducer,
  },
});
