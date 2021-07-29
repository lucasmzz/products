import Header from "./Header";
import Login from "./Login";
import ProductDisplay from "./ProductDisplay";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import data from "./productsSample.json";

const App = () => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({
    displayName: "Lucas Mazzutti",
    email: "lucasderh@gmail.com",
    photoUrl: "",
  });
  const [products, setProducts] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(
  //         login({
  //           displayName: user.displayName,
  //           email: user.email,
  //           photoUrl: user.photoURL,
  //         })
  //       );
  //     }
  //   });
  // }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
};

export default App;
