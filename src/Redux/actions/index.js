
export const increment = () => {
  return {
    type: "plus",
  };
};

export const decrement = () => {
  return {
    type: "minus",
  };
};

export const setproductlist = (productList) => {
  return {
    type: "SET_PRODUCT_LIST",
    payload: productList,
  };
};
