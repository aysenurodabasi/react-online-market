import React from "react";
import { Container } from "reactstrap";
import Navigator from "../navigator/Navigator";
import Dashboard from "./Dashboard";
import {Route , Switch} from "react-router-dom"
import CartDetail from "../cart/cartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
    <Navigator/>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/product" exact component={Dashboard} />
      <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
      <Route path="/saveproduct" component={AddOrUpdateProduct} />
      <Route path="/cart" exact component={CartDetail} />
      <Route component={NotFound} />
    </Switch>
    </Container>
  );
}

export default App;
