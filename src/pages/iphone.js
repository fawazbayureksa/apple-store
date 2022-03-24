import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Shopiphone from "../components/shop/iphone";
class Mac extends Component {
  render() {
    return (
      <div>
          <Shopiphone />
      </div>
    );
  }
}
export default Mac;

const Container = styled.div`
    margin-top: 20px;
    padding: 0 0 0 215px;
`