import Header from "./Header";
import ProductDisplay from "./ProductDisplay";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://products-display-api.netlify.app/.netlify/functions/api/products"
      );
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Switch>
            <Route path="/product">
              <ProductDisplay product={selectedProduct} />
            </Route>
            <Route path="/">
              {products ? (
                <ProductList
                  products={products}
                  onProductSelect={setSelectedProduct}
                />
              ) : (
                <div className="header__missing__products">
                  <p>
                    No products to display at the moment. Please come back
                    later.
                  </p>
                </div>
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
