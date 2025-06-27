import style from "./DetailRelated.module.css";
const DetailRelatedItem = function (props) {
  const { img1, name, price } = props.data;
  return (
    <li>
      <img src={img1}></img>
      <h5>{name}</h5>
      <i>{price} VND</i>
    </li>
  );
};
export default DetailRelatedItem;
