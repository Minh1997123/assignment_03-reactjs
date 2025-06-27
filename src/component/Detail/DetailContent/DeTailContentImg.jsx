import { useState } from "react";
import style from "./DeTailContentImg.module.css";
const DeTailContentImg = function (props) {
  const [imgCurrent, setImgCurrent] = useState(props.data.img1);
  const { img1, img2, img3, img4 } = props.data;
  //   ham set anh hien thi khi an vao
  const setImgHandler = function (img) {
    setImgCurrent(img);
  };
  return (
    <div className={style.imgs}>
      <div className={style.items}>
        <img src={img1} alt="" onClick={() => setImgHandler(img1)} />
        <img src={img2} alt="" onClick={() => setImgHandler(img2)} />
        <img src={img3} alt="" onClick={() => setImgHandler(img3)} />
        <img src={img4} alt="" onClick={() => setImgHandler(img4)} />
      </div>
      <img src={imgCurrent} alt="" />
    </div>
  );
};
export default DeTailContentImg;
