import $axios from "./axios.instance";

export const addProduct = async (values) => {
  return await $axios.post("/product/add", values);
};
