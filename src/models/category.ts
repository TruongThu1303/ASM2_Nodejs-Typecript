import * as Yup from "yup";

export const addSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
});

export type addForm = Yup.InferType<typeof addSchema>;

export const updateSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
});

export type updateForm = Yup.InferType<typeof updateSchema>;