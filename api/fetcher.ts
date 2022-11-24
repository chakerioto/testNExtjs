import { API_URL, END_POINT } from "./../constants/index";
import myApi from "./myApi";

export const getSingleProductData = async (slug: any) => {
  const response = await myApi.get(`${API_URL}${END_POINT.stockSingle}${slug}`);

  console.log(response, "res"); // here when I logged response data it returened a json object

  if (!response.data.length) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    category: response.data[0],
  };
};
