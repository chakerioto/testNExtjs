import React from "react";
import { getSingleProductData } from "../../api/fetcher";
import myApi from "../../api/myApi";
import { API_URL, END_POINT } from "../../constants";

const SingleProductPage = (props) => {
  return <div>[slug]</div>;
};

export default SingleProductPage;

export async function getServerSideProps({ params: { slug } }: any) {
  console.log(slug);

  const res = await getSingleProductData(slug);
  console.log(res, "res");

  return {
    props: {}, // will be passed to the page component as props
  };
}
