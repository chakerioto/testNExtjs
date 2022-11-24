import React from "react";
import { ProductItem } from "../../constants";
import styles from "../../styles/components/ProductList.module.scss";
import Product from "../product";

interface ItemListProps {
  products: ProductItem[];
}

const ProductList = ({ products }: ItemListProps) => {
  return (
    <div className={styles.itemListContainer}>
      {products.length
        ? products.map((el, index) => {
            return <Product key={index} item={el} />;
          })
        : null}
    </div>
  );
};

export default ProductList;
