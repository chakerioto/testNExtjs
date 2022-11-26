import Image from "next/image";
import React from "react";
import {
  getSingleProductData,
  getSingleProductReview,
  getSingleProductStockNumber,
} from "../../api/fetcher";
import Product from "../../components/product";
import { ErrorMsg, fakeImgUrl } from "../../constants";
import { renderStockDescription } from "../../helpers";
import styles from "../../styles/components/SingleProductPage.module.scss";

const SingleProductPage = (props: any) => {
  const { productDataDetail, productStock, singleReview } = props;

  return (
    <div className={styles.productPageContainer}>
      <div className={styles.productContainer}>
        <Product item={productDataDetail} stock={productStock} />
      </div>
      <div className={styles.productDataDetailContainer}>
        <div className={styles.productDataDetail}>
          <p className={styles.pname}>{productDataDetail.fields.Name}</p>{" "}
          <p>{productDataDetail.fields.Brand}</p>{" "}
          <p style={{ color: "red" }}>{productDataDetail.fields.Price}$</p>{" "}
          <p>{productDataDetail.fields.Description}</p>{" "}
          <p>{productDataDetail.fields.Name}</p>{" "}
          {productStock >= 0 && <p>{renderStockDescription(productStock)}</p>}
        </div>
        <div className={styles.comments}>
          <p className={styles.pname}>User Reviews</p>

          {singleReview.length
            ? singleReview.map((el: any, index: any) => {
                return (
                  <>
                    <div className={styles.reviews}>
                      <div>
                        <Image
                          src={fakeImgUrl.img1}
                          alt="img"
                          width={100}
                          height={100}
                        />
                        <p>{el.fields.Author}</p>
                      </div>
                      <div className={styles.des}>
                        <p>{el.fields.Title}</p>
                        <p>{el.fields.Description}</p>
                      </div>

                      <p className={styles.rting}> {el.fields.Rating}</p>
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

export async function getServerSideProps({ params: { slug } }: any) {
  const productDataDetail: any = await getSingleProductData(slug);
  console.log(productDataDetail, "idddd");

  // In case no detail data of Product , return 404 page.
  if (productDataDetail.notFound) {
    return {
      notFound: true,
    };
  }

  //In case the Products ID are valids , we continues to get it reviews nad stock

  const productStock: number = await getSingleProductStockNumber(
    productDataDetail.fields.Id
  );
  const singleReview: any = await getSingleProductReview(
    productDataDetail.fields.Id
  );

  return {
    props: {
      productDataDetail,
      productStock,
      singleReview,
    }, // will be passed to the page component as props
  };
}
