import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductItem } from "../../constants";
import { renderStockDescription } from "../../helpers";
import styles from "../../styles/components/Product.module.scss";

interface ProductProps {
  item: ProductItem;
  stock: number;
}

const Product = ({ item, stock }: ProductProps) => {
  console.log(stock);

  return (
    <>
      <Link href={`/product/${item.id}`}>
        <div className={styles.productCards}>
          <Image
            src={item.fields.pictures[0].url}
            alt="product-img"
            width={230}
            height={332 / 2}
          />
          <p>{item.fields.Name}</p>
          <p>{item.fields.Brand}</p>
          <p className={styles.price}>{item.fields.Price}$</p>

          {stock >= 0 && <p>{renderStockDescription(stock)}</p>}
        </div>
      </Link>
    </>
  );
};

export default Product;
