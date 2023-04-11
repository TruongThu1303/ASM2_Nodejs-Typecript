import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { addForm, addSchema } from "../../models/category";
import { addCategory } from "../../api/category";

const AddCategory = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addForm>({
    resolver: yupResolver(addSchema),
  });
  const onSubmit = async (category: addForm) => {
    try {
      const response = await addCategory(category);
      console.log(response);
      navigate("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <div className="w-full p-7">
        <h1 className="leading-[30px] mb-4 text-xl text-[#5F5E61] font-semibold">
          Thêm mới Danh mục
        </h1>
        <form className="flex gap-x-[35px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <h1 className="text-[#3D5170] font-medium mb-4 px-4 shadow-md leading-6 pb-4">
              Thông tin danh mục
            </h1>
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-[13px] leading-5 text-[#5A6169] block mb-2"
              >
                Tên danh mục
              </label>
              <input
                {...register("name")}
                type="text"
                className="px-3 py-2 w-full text-sm text-[#444444] leading-5 border border-gray-200 rounded-md outline-none"
              />
              <p className="text-xs text-red-500">
                {errors.name && errors.name.message}
              </p>
            </div>
            <button className="bg-[#00B0D7] hover:bg-[#007BFF] transition-all text-white text-xs leading-[14px] px-[13px] py-[10px] rounded-md">
              Thêm mới
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
