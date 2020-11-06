import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { ProductContext } from "../context/products";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  }

  const {
    image: { url },
    price,
    title,
    description,
  } = product;

  return (
    <section className="single-product">
      <img src={url} alt={title} className="single-product-image" />
      <article>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <button
          className="btn btn-primary btn-block"
          onClick={() => history.push("/cart")}
        >
          add to cart
        </button>
      </article>
    </section>
  );
}
