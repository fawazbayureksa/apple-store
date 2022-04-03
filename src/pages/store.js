import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from "../components/style/store.module.css";
import styled from "styled-components";
import Section1 from "../components/store/section1";
import Section2 from "../components/store/section2";
import Section3 from "../components/store/section3";
import Section4 from "../components/store/section4";
import Section5 from "../components/store/section5";
import Section6 from "../components/store/section6";
import Section7 from "../components/store/section7";
import Section8 from "../components/store/section8";

class Store extends Component {
  render() {
    return (
      <div>
        <div className='container'>
            <div className="row justify-content-center ms-4 ps-4 mt-5">
              <div className="col-md-8">
                  <div className={Styles.text}>
                    <span>Store.</span>
                    The best way to buy the products you love.
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={Styles.text1}> 
                    <p>Need Shopping help?</p>
                    <p className="text-primary">Ask a Spesialist</p>
                    <p>Visit a Apple Store</p>
                    <p className="text-primary">Find one near you</p>
                  </div>
              </div>
            </div>
        </div>



        <div className="row justify-content-center ms-4 ps-4 mt-5">
          <div className={Styles.section2}>
              <Section1 />
          </div>
        </div>
        
            <Section2 />

        <div className='container'>
          <div className="row justify-content-center ms-4 ps-4 mt-5">
              <Section3 />
          </div>
        </div>
    
              <Section4 />


              <Section5 />


              <Section6 />


              <Section7 />

              <Section8 />

      </div>
    );
  }
}
export default Store;
