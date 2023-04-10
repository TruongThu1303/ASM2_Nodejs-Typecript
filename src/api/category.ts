import instence from ".";

export const getCategory = () => {
  return instence.get("/categories");
};
export const getOneCategory = (id: string) => {
  return instence.get(`/categories/${id}`);
};
