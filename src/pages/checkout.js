import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Comac from "../components/checkout/co_mac";
class Checkout extends Component {
  render() {
    return (
      <div>
          <Comac />
      </div>
    );
  }
}
export default Checkout;

const Container = styled.div`
    margin-top: 20px;
    padding: 0 0 0 215px;
`