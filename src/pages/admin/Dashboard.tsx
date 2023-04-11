import { Link } from "react-router-dom";
// import SidebarMenu from "../components/SidebarMenu";
import { deleteProducts, getAll } from "../../api/product";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import { getCategory } from "../../api/category";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<IProduct[]>([]);
  // console.log(category);

  // console.log(products);
//Lấy danh sách các sp và danh mục từ serevr thông qua các API
  const fetchProducts = async () => {
    try {
      const { data } = await getAll();
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const { data } = await getCategory();
      // console.log(data);
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = (id: string | number) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm")) {
      deleteProducts(id);
      location.href = "/admin";
    }
  };
//để hiển thị danh sách và danh mục sp mới nhất
  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="flex flex-wrap items-center justify-between pb-4 bg-white dark:bg-gray-900 ">
        <div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
             
            </div>
            
          </div>
        </div>
        <Link to={"/admin/addProduct"}>
          <button className="p-3 font-medium text-white transition-all bg-[#444444] rounded-md shadow-lg hover:bg-[#FFFFFF] hover:text-[#444444] shadow-indigo-500/50">
            Add product
          </button>
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Images
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Original Price
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Brand
            </th>
            <th scope="col" className="px-6 py-3 text-blue-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-violet-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">
                <img src={product?.images} className="w-28" alt="" />
              </td>
              <td className="px-6 py-4">
                {category.map((value) => {
                  return value._id == product.categoryId ? value.name : "";
                })}
              </td>
              <td className="px-6 py-4">{product.price} ₫</td>
              <td className="px-6 py-4">{product.original_price} ₫</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">
                <Link
                  to={`/admin/products/${product._id}`}
                  className="px-4 py-2 font-medium border-dotted  border-2 border-green-500 rounded-md hover:bg-green-600 hover:text-white  shadow-green-500/50"
                >
                  Edit
                </Link>
                <button
                  // href="/admin"
                  onClick={() => handleDeleteProduct(product._id)}
                  className="ml-1 px-4 py-2 font-medium border-dotted  border-2 border-red-500 rounded-md hover:bg-red-600 hover:text-white  shadow-red-500/50"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
