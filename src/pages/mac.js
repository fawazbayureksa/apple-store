import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Shopmac from "../components/shop/mac";
class Mac extends Component {
  render() {
    return (
      <div>
          <Shopmac />
      </div>
    );
  }
}
export default Mac;

const Container = styled.div`
    margin-top: 20px;
    padding: 0 0 0 215px;
`