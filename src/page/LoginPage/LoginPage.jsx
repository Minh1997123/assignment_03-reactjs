import Login from "../../component/Login/Login";
import { getLocalStorage } from "../../store/localStorage ";
import { onLogin } from "../../store/Slice";
import store from "../../store/store";
import { redirect, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const LoginPage = function () {
  const navigate = useNavigate();
  const userCurrent = useSelector((state) => state.login);
  useEffect(
    function () {
      // chuyen ve trang chu khi da co nguoi dang nhap
      if (userCurrent.isLogin) {
        navigate("/");
      }
    },
    [userCurrent, navigate]
  );
  return <Login></Login>;
};
export default LoginPage;

export const action = async function ({ request }) {
  const userArr = getLocalStorage("userArr");
  //   chuyen sang trang dang ky khi ko co danh sach user
  if (!userArr) {
    alert("email hoac password bi sai vui long nhap lai");
    return "";
  }
  // lay thong tin tu local va tu form
  const fd = await request.formData();
  const dataUser = Object.fromEntries(fd.entries());
  // tim email nguoi dung dang dang nhap
  const dataCurrent = userArr.find(function (user) {
    return user.email === dataUser.email;
  });
  // kiem tra khi khong co tai khoan nao phu hop
  if (!dataCurrent) {
    alert("email hoac password bi sai vui long nhap lai");
    return "";
  }
  //  s kiem tra xem dung pass ko
  const isPassword = dataCurrent.password === dataUser.password;
  if (!isPassword) {
    alert("email hoac password bi sai vui long nhap lai");
    return "";
  }
  //   day du lieu len local va set state redux
  store.dispatch(onLogin(dataCurrent));
  return redirect("/");
};
