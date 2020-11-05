import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

export default function ProductList({ title, products }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
