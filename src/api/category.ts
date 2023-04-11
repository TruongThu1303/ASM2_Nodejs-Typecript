import instance from ".";
import { addForm, updateForm } from "../models/category";

const token = JSON.parse(localStorage.getItem("user")!)?.accessToken;

export const getCategory = () => {
  return instance.get("/categories");
};
export const getOneCategory = (id: string | number) => {
  return instance.get(`/categories/${id}`);
};
export const deleteCategory = (id: string | number) => {
  return instance.delete(`/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const addCategory = (category: addForm) => {
  return instance.post("/categories", category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateCategory = (id: string | number, category: updateForm) => {
  return instance.put(`/categories/${id}`, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};