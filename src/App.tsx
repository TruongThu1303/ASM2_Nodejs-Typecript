import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/layout/user/user";
import Homepage from "./pages/user/HomePage";
import DetailProduct from "./pages/user/DetailProduct";
import AdminLayout from "./components/layout/admin/admin";
import Dashboard from "./pages/admin/Dashboard";
import Add from "./pages/admin/Add";
import Edit from "./pages/admin/Edit";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/user/Cart";
import EditCategory from "./pages/admin/EditCategory";
import ListCategory from "./pages/admin/ListCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="product/:id" element={<DetailProduct />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="addProduct" element={<Add />}></Route>
          <Route path="products/:id" element={<Edit />}></Route>
          <Route path="category" element={<ListCategory />}></Route>
          <Route path="category/:id" element={<EditCategory />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
