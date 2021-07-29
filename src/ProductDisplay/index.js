import React from "react";
import { useHistory } from "react-router-dom";
import ShopIcon from "@material-ui/icons/Shop";
import "./styles.css";

const ProductDisplay = ({ product }) => {
  const history = useHistory();

  const handleReturn = () => {
    history.push("/");
  };

  return !product ? (
    <div className="product__missing">
      Please select a product{" "}
      <button className="btn__back" onClick={handleReturn}>
        Back to List
      </button>
    </div>
  ) : (
    <div className="product">
      <div className="product__header">
        <p>{product.title}</p>
      </div>
      <div className="product__details">
        <img src={product.image_link} alt="prod_img" />
        <p className="product__description">{product.description}</p>
        <div className="product__conditions">
          <p
            className={`product__availability ${
              product.availability === "in stock" &&
              "product__availability__stock"
            }`}
          >
            {product.availability}
          </p>
          <p
            className={`product__condition ${
              product.condition === "new" && "product__condition__new"
            }`}
          >
            {product.condition}
          </p>
          <p className="product__price">{product.price}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noreferrer"
            className="product__link__store"
          >
            <ShopIcon
              style={{
                paddingRight: "20px",
                fontSize: "2.1rem",
                color: "lightgray",
              }}
            />
            Buy in Store
          </a>
        </div>
      </div>
      <div className="product__actions">
        <button className="btn__back" onClick={handleReturn}>
          Back to List
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
