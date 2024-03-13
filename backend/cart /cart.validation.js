import Yup from "yup";

export const addItemToCartValidationSchema = Yup.object({
  productId: Yup.string().required("Product Id is required.").trim(),
  oderQuantity: Yup.number()
    .required("Oder quantity is required")
    .min(1, "Oder quantity must be at least 1."),
});

export const updateCartQuantityValidationSchema = Yup.object({
  action: Yup.string().required().oneOf(["inc", "dec"]),
});
