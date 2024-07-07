import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductHome from "./pages/ProductHome";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProductHome} />
      <Route path="/product/:id" component={ProductDetailPage} />
    </Switch>
  </Router>
);

export default App;
