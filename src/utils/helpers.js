// helper functions
export const featuredProducts = (products) => {
  return products.filter((product) => product.featured === true);
};
