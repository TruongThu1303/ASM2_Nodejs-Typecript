import instance from ".";
import { IProduct } from "../interfaces/product";
import { addForm, updateForm } from "../models/product";

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getById = (id: string | number) => {
  const uri = `/products/${id}`;
  return instance.get(uri);
};

export const addProduct = (product: addForm) => {
  return instance.post("/products", product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateProduct = (id: string | number, product: updateForm) => {
  return instance.put(`/products/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteProducts = (id: number | string) => {
  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
