import React, { useEffect, useState } from "react";
import {
  getAllProductsData,
  getAllProductStockAndData,
} from "../../api/fetcher";
import myApi from "../../api/myApi";
import Header from "../../components/header";
import ProductList from "../../components/itemlist";
import { API_KEYS, API_URL, END_POINT, ProductItem } from "../../constants";

const ProductPage = (props: any) => {
  const { listProduct, listStock } = props;

  return (
    <div>
      <ProductList products={listProduct} listStock={listStock} />
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps({ req, res }: any) {
  const { listProduct, listStock } = await getAllProductStockAndData();

  return {
    props: {
      listProduct,
      listStock,
    }, // will be passed to the page component as props
  };
}
