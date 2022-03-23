import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'; 
import styled from "styled-components";
import Section from "./style/section.module.css";
import virtual from "../assets/asset-71.jpeg";
import Menu from "../assets/asset-72.jpeg";
import Apple from "../assets/asset-73.jpeg";
import App from "../assets/asset-74.jpeg";

const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:1},
    {width:768, itemsToShow:2 , outerSpacing:150},
    {width:1200 , itemsToShow:3, outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];




class Section7 extends Component {
    render (){
        return (
            <div>
                    <div className='container'>
                        <div className="row justify-content-center ms-4 ps-4 mt-5">
                            <div className={Section.text}>
                                <p> 
                                    <span> Do more with Apple products. </span>
                                    Here's where the fun begins.     
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="d-flex flex-row flex-wrap flex-lg-nowrap">
                <Carousel breakPoints={breakPoints}>
                        <div className="card me-3">
                            <img src={virtual} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                            <p className="text-black-50">WATCH AND LEARN</p>     
                            <Span className="fs-3 fw-bold">Join Today at Apple virtual session.</Span>
                            </div>
                        </div>                       
                     
                        <div className="card me-3">
                            <img src={Menu} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                            <Span className="fs-3 fw-bold">Six Apple services. One easy subscription.</Span>
                            </div>
                        </div>                       
                     
                        <div className="card me-3">
                            <img src={Apple} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                                <Span className="fs-3 fw-bold">Discover all the ways to use Apple Pay.</Span>
                            </div>
                        </div>                       
                     
                        <div className="card me-5 pe-5">
                            <img src={App} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                            <Span className="fs-3 fw-bold">See how one app can control your entire home.</Span>
                            </div>
                        </div>  
                    </Carousel>                     
                </div>
            </div>
            
        )
    }
}
export default Section7;

const Span = styled.div`
    margin-top:30px;
`