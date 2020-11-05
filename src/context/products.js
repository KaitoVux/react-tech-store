import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts } from "../utils/helpers";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    // TODO fetch API & store products
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response = await axios.get(`${url}/products`);
        if (response.status === 200) {
          const featured = featuredProducts(response.data);
          setFeatured(featured);
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
