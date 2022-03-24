import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Shopwatch from "../components/shop/watch";
class Watch extends Component {
  render() {
    return (
      <div>
          <Shopwatch />
      </div>
    );
  }
}
export default Watch;

const Container = styled.div`
    margin-top: 20px;
    padding: 0 0 0 215px;
`