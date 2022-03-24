import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Shopipad from "../components/shop/ipad";
class Ipad extends Component {
  render() {
    return (
      <div>
          <Shopipad />
      </div>
    );
  }
}
export default Ipad;

const Container = styled.div`
    margin-top: 20px;
    padding: 0 0 0 215px;
`