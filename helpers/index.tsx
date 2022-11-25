export const renderStockDescription = (_stock: number) => {
  let str = "";
  if (_stock === 0) {
    str = "No Stock Available";
  }
  if (_stock >= 1 && _stock <= 10) {
    str = `Only ${_stock} items available`;
  }

  if (_stock > 10) {
    str = `In Stock`;
  }

  return str;
};
