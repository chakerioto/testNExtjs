export const API_KEYS = "keyA7UQyT1UeEAUKd";
export const API_URL = "https://api.airtable.com/v0/appnh5MO4BVS1yVSp";

export const END_POINT = {
  product: "/Product",
  stock: "/Stock",
  stockSingle: "/Stock?filterByFormula=ProductID+%3D+",
};

// INTERFACE

export interface ItemFields {
  Brand: string;
  Id: number;
  Name: string;
  Price: number;
  Status: string;
  Description: string;
  pictures: any;
}

export interface ProductItem {
  createdTime: any;
  fields: ItemFields;
  id: string;
}
