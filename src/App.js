import Header from "./Header";
import ProductDisplay from "./ProductDisplay";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import data from "./productsSample.json";

const App = () => {
  const [products, setProducts] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
              <ProductList
                products={products}
                onProductSelect={setSelectedProduct}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
