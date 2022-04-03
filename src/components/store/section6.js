import React, { Component } from 'react';
import styled from "styled-components";
import Carousel from 'react-elastic-carousel';
import Section from "../style/section.module.css";
import Speaker from "../../assets/asset-53.jpeg";
import Airpods from "../../assets/asset-54.jpeg";
import Twe from "../../assets/asset-55.jpeg";

const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:1},
    {width:768, itemsToShow:2 , outerSpacing:150},
    {width:1200 , itemsToShow:3, outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];


class Section6 extends Component {
    render (){
        return (
            <div>
                  <div className='container'>
                     <div className="row justify-content-center ms-4 ps-4 mt-5">
                            <div className={Section.text}>
                                <p> 
                                    <span> Loud and clear. </span>
                                    Unparalledled choice for rich, high-quality sound.     
                                </p>
                            </div>
                         </div>
                    </div>
                <div className="d-flex flex-row flex-wrap flex-xl-nowrap">
                        <Carousel breakPoints={breakPoints}>
                            <div className="card">
                                <img src={Speaker} alt="Iphone-13"/>                   
                                <div className="card-img-overlay">
                                    <Span className="fs-4 fw-bold">Get 6 months of Apple Music free.</Span>
                                    <p className="fs-6">Include with purchase of select AirPods and Beats products, and HomePod mini.**</p>          
                                </div>
                            </div>                       
                        
                        
                            <div className="card">
                                <div className="card-body">
                                    <img src={Airpods} alt="Iphone-13" className="card-img p-3"/>                   
                                    <small className="text-danger">Free Engarving</small>                  
                                    <p className="fw-bold">AirPods (3rd generation)</p>
                                    <small className="text-black-50">$179.00</small>       
                                </div>
                            </div>                       
                         
                        
                            <div className="card">
                                <div className="card-body">
                                    <img src={Twe} alt="Iphone-13" className="card-img p-3"/>                   
                                    <small className="text-danger">Free Engarving</small>                  
                                    <p className="fw-bold">Beats Fit Pro True Wireless Earbuds</p>
                                    <small className="text-black-50">$199.99</small>       
                                </div>
                            </div>                       
                         
                            <div className="card">
                                <div className="card-body">
                                    <img src={Airpods} alt="Iphone-13" className="card-img p-3"/>                   
                                    <small className="text-danger">Free Engarving</small>                  
                                    <p className="fw-bold">AirPods Pro</p>
                                    <small className="text-black-50">$249.00</small>       
                                </div>
                            </div>   
                        </Carousel>                    
                </div>
            </div>
        )
    }
}
export default Section6;

const Span = styled.div`
    margin-top:20px;
    width:80%;
`