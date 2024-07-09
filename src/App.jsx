import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductHome from "./pages/ProductHome";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import OrderSuccessful from "./pages/OrderSuccessful";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProductHome} />
      <Route path="/product/:id" component={ProductDetailPage} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment" component={Payment} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/order-successful" component={OrderSuccessful} />
    </Switch>
  </Router>
);

export default App;
