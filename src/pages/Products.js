import React, { useContext } from "react";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
import { ProductContext } from "../context/products";
export default function Products() {
  const store = useContext(ProductContext);
  const { loading, products, featured } = store;

  if (loading) return <Loading />;
  return <ProductList title="our products" products={products} />;
}
