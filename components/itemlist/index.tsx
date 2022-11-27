import React from "react";
import { ProductItem } from "../../constants";
import styles from "../../styles/components/ProductList.module.scss";
import Product from "../product";

interface ItemListProps {
  products: ProductItem[];
  listStock: any[];
}

const ProductList = ({ products, listStock }: ItemListProps) => {
  console.log(listStock, "listStock");

  const getStockByProductId = (_id: number) => {
    let item = listStock.find((el) => el.fields.ProductID === _id);
    if (item) {
      return item.fields.Stock;
    } else return -1;
  };

  return (
    <>
      {products.length ? (
        <div role="product-data" className={styles.itemListContainer}>
          {products.map((el, index) => {
            return (
              <Product
                key={index}
                item={el}
                stock={getStockByProductId(el.fields.Id)}
              />
            );
          })}
        </div>
      ) : (
        <div role="nodata">Ooops , There were no Products</div>
      )}
    </>
  );
};

export default ProductList;
