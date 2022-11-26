import {
  API_URL,
  END_POINT,
  ErrorMsg,
  headers,
  ProductItem,
} from "./../constants/index";

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
  const singleProductData = await response.json();
  if (singleProductData.error === ErrorMsg.notFound) {
    return {
      notFound: true,
    };
  }
  productData = singleProductData;
  return productData;
};

export const singleProductStockPromise = async (slug: any) => {
  const url = `${API_URL}${END_POINT.stockSingle}${slug}`;
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const singleProductReviewPromise = async (slug: any) => {
  const url = `${API_URL}${END_POINT.reviewSingle}${slug}`;
  const response = await fetch(url, {
    headers: headers,
  });
  return response.json();
};

export const getSingleProductStockNumber = async (_id: number) => {
  let stock = 0;
  try {
    const res = await singleProductStockPromise(_id);
    if (res.records.length) {
      stock = res.records[0].fields.Stock || 0;
    }
  } catch (error) {
    console.log(error);
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
  if (response.ok) {
    const data = await response.json();
    listProduct = data.records;
    return listProduct;
  } else {
    return listProduct;
  }
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
