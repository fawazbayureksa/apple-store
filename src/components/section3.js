import React, { Component } from 'react';
import Section from "../components/style/section.module.css";
import styled from "styled-components";
import User from "../assets/asset-15.jpeg";
import App from "../assets/asset-16.jpeg";
import Bar from "../assets/asset-17.jpeg";
class Section3 extends Component {
    render (){
        return (
            <div>
                <div className={Section.text}>
                    <p> 
                        <span> Help is here. </span>
                        Whenever and however you need it.     
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 mb-3">
                        <div className="card">
                            <img src={User} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                                <Span>Shop one on one with a specialist. Online or in store</Span>   
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="card mb-3">
                            <img src={App} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                                <Span>Get to know your new device with a free Personal Session.</Span>   
                            </div>
                        </div>
                        <div className="card">
                            <img src={Bar} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                                <Span>Get expert service and support at the Genius Bar.</Span>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section3;

const Span = styled.div`
    font-size:22px;
    font-weight:700;
    width:70%;
    margin-top:40px;

`