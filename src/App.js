import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./component/Layout/Layout";
import HomePage, { loader as loaderHome } from "./page/HomePage/HomePage";
import ShopPage, { loader as loaderShop } from "./page/ShopPage/ShopPage";
import RegisterPage, {
  action as actionRegister,
} from "./page/RegisterPage/RegisterPage";
import LoginPage, { action as actionLogin } from "./page/LoginPage/LoginPage";
import CartPage from "./page/CartPage/CartPage";
import CheckoutPage from "./page/CheckoutPage/CheckoutPage";
import DetailPage, {
  loader as loaderDetail,
} from "./page/DetailPage/DeatilPage";
import { useEffect } from "react";
import { getLocalStorage } from "./store/localStorage ";
import { useDispatch } from "react-redux";
import { onLogin, getListCart } from "./store/Slice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage>, loader: loaderHome },
      {
        path: "shop",
        element: <ShopPage></ShopPage>,
        loader: loaderShop,
      },
      {
        path: "detail/:productId",
        element: <DetailPage></DetailPage>,
        loader: loaderDetail,
      },
    ],
  },
  { path: "/checkout", element: <CheckoutPage></CheckoutPage> },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
    action: actionRegister,
  },
  { path: "/login", element: <LoginPage></LoginPage>, action: actionLogin },
]);
function App() {
  const dispatch = useDispatch();
  useEffect(function () {
    // lay thong tin nguoi dung da dang nhap khi lan dau vao web
    const dataUser = getLocalStorage("userCurrent");
    const dataListCart = getLocalStorage("listCart");
    if (dataUser) {
      dispatch(onLogin(dataUser));
    }
    if (dataListCart) {
      dispatch(getListCart(dataListCart));
    }
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
