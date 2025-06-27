import Register from "../../component/Register/Register";
import { getLocalStorage, setLocalStorage } from "../../store/localStorage ";
import { redirect, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const RegisterPage = function () {
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
  return <Register></Register>;
};
export default RegisterPage;
// ham tao user moi
export const action = async function ({ request }) {
  // lay thong tin user tu local va tu form nhap
  const userArr = getLocalStorage("userArr");
  const fd = await request.formData();
  const dataUser = Object.fromEntries(fd.entries());
  //   kiem tra xem da co danh sach nguoi dung chua
  if (!userArr) {
    setLocalStorage("userArr", [dataUser]);
    return;
  }
  //   kiem tra xem da co ai dk email chua
  const userCurren = userArr.find(function (user) {
    return user.email === dataUser.email;
  });
  if (userCurren) {
    alert("email da co nguoi su dung");
    return;
  }
  //   day du lieu len local
  const data = [...userArr, dataUser];
  setLocalStorage("userArr", data);
  return redirect("/login");
};
