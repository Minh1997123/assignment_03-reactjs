import DeTailContent from "../../component/Detail/DetailContent/DetailContent";
import DetailDescription from "../../component/Detail/DetailDescription/DetailDescription";
import DetailRelated from "../../component/Detail/DetailRelated/DetailRelated";
const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
const DetailPage = function () {
  return (
    <div>
      <DeTailContent></DeTailContent>
      <DetailDescription></DetailDescription>
      <DetailRelated></DetailRelated>
    </div>
  );
};
export default DetailPage;

export const loader = async function ({ params }) {
  const resQuery = await fetch(url);
  const listItem = await resQuery.json();
  //   lay thong tin san pham dang xem
  const detailItem = listItem.find(function (item) {
    return item._id.$oid === params.productId;
  });
  //   tim cac san pham lien quan va  khac voi san pham dang xem
  const relatedItems = listItem.filter(function (item) {
    const isRelatedItems =
      detailItem.category === item.category &&
      detailItem._id.$oid !== item._id.$oid;
    return isRelatedItems;
  });
  const itemCurent = { ...detailItem, relatedItems: relatedItems };
  return itemCurent;
};
