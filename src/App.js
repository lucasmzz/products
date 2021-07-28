import { useEffect } from "react";
import { auth } from "./firebase";
import "./App.css";

const App = () => {
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
  return <div className="app">Products</div>;
};

export default App;
