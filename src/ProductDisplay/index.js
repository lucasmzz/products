import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const ProductDisplay = ({ product }) => {
  const history = useHistory();

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <div className="product">
      <div className="product__header">{product.title}</div>
      <div className="product__details">
        <img src={product.image_link} alt="prod_img" />
        <p>{product.description}</p>
        <p>{product.availability}</p>
        <p>{product.condition}</p>
        <p>{product.price}</p>
      </div>
      <div className="product__actions">
        <a
          href={product.link}
          target="_blank"
          rel="noreferrer"
          className="product__actions_go"
        >
          Go to Store
        </a>
        <button onClick={handleReturn}>Back to List</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
