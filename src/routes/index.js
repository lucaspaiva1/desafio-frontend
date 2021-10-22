/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProductsPage from "../pages/Products";
import Nav from "../layout/Nav";
import { Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Nav />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact={true}>
          <ProductsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
