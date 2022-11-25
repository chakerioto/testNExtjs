import { API_URL, END_POINT, headers, ProductItem } from "./../constants/index";

export const singleProductPromise = async (slug: any) => {
  const url = `${API_URL}${END_POINT.product}/${slug}`;
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const getSingleProductData = async (slug: any) => {
  let productData = {};

  let urlSingleData = `${API_URL}${END_POINT.product}/${slug}`;
  const response = await fetch(urlSingleData, {
    headers: headers,
  });
  if (response.status !== 200) {
    console.log("not get the result");
    throw new Error("Could not get the result");
  }

  productData = response.json();

  return productData;
};

export const singleProductStockPromise = async (slug: any) => {
  const url = `${API_URL}${END_POINT.stockSingle}${slug}`;
  console.log(url, "url");
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const singleProductReviewPromise = async (slug: any) => {
  const url = `${API_URL}${END_POINT.reviewSingle}${slug}`;
  console.log("url", url);
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const getSingleProductStockNumber = async (_id: number) => {
  let stock = 0;
  const res = await singleProductStockPromise(_id);

  if (res.records.length) {
    stock = res.records[0].fields.Stock || 0;
  }

  return stock;
};

export const getSingleProductReview = async (_id: number) => {
  let reviews: any[] = [];
  const res = await singleProductReviewPromise(_id);
  if (res.records.length) {
    reviews = [...res.records];
  }

  return reviews;
};

export const getAllProductPromise = async () => {
  const url = `${API_URL}${END_POINT.product}`;
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const getAllProductStockPromise = async () => {
  const url = `${API_URL}${END_POINT.stock}`;
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const getAllProductsData = async () => {
  let listProduct: ProductItem[] = [];
  let urlAlldata = `${API_URL}${END_POINT.product}`;
  const response = await fetch(urlAlldata, {
    headers: headers,
  });

  if (response.status !== 200) {
    throw new Error("Could not get the result");
  }
  const data = await response.json();
  let tempData = JSON.parse(JSON.stringify(data));
  listProduct = tempData.records;
  return listProduct;
};

export const getAllProductStockAndData = async () => {
  let listProduct: any = [];
  let listStock: any = [];
  try {
    const [allProductStockData, allProductDetailData] = await Promise.all([
      getAllProductStockPromise(),
      getAllProductPromise(),
    ]);
    listProduct = allProductDetailData.records;
    listStock = allProductStockData.records;
  } catch (err) {
    console.log(err);
  }
  return {
    listProduct,
    listStock,
  };
};
