import React, { useEffect, useState } from "react";
import myApi from "../../api/myApi";
import Header from "../../components/header";
import ProductList from "../../components/itemlist";
import { API_KEYS, API_URL, END_POINT, ProductItem } from "../../constants";

const ProductPage = () => {
  const [listProduct, setListProduct] = useState<ProductItem[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
      const res = await myApi.get(`${API_URL}${END_POINT.product}`);
      console.log(res, "res");
      setListProduct(res.data.records);
    };

    init();
  }, []);

  return (
    <div>
      <Header />
      <ProductList products={listProduct} />
    </div>
  );
};

export default ProductPage;
