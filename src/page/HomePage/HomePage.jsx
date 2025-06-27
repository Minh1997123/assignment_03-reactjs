import Banner from "../../component/Banner/Banner";
import Categories from "../../component/Categories/Categories";
import OtherInfor from "../../component/OtherInfor/OtherInfor";
import List from "../../component/List/List";
const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
const HomePage = function () {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <List></List>
      <OtherInfor></OtherInfor>
    </div>
  );
};
export default HomePage;
// ham loader lay 8 san pham dau tien tu api
export const loader = async function () {
  const resQuery = await fetch(url);
  const data = await resQuery.json();
  const listItem = data.filter(function (item, index) {
    return index < 8;
  });
  return listItem;
};
