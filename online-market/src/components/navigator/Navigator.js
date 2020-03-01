import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink
} from "reactstrap";
import CartSummary from "../cart/cartSummary";

export default class Navigator extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">Market</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink>
                  <Link to="/saveproduct">Ürün ekle</Link>
                </NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
           
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
