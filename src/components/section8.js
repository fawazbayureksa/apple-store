import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'; 
import Section from "./style/section.module.css";
import Mac from "../assets/asset-74.jpeg";
import Mac2 from "../assets/asset-76.jpeg";
import Mac3 from "../assets/asset-77.jpg";
import Ipad from "../assets/asset-75.jpeg";


const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:1},
    {width:768, itemsToShow:2 , outerSpacing:150},
    {width:1200 , itemsToShow:3, outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];

class Section8 extends Component {
    render (){
        return (
            <div>
                    <div className='container'>
                        <div className="row justify-content-center ms-4 ps-4 mt-5">
                            <div className={Section.text}>
                                <p> 
                                    <span> Shop by group. </span>
                                    Get special for students businesses, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap flex-lg-nowrap">
                        <Carousel breakPoints={breakPoints}>
                            <div className="card  me-3">
                                <img src={Mac} alt="Mac or Ipad" /> 
                                    <div className="card-img-overlay">
                                        <p className='fs-6 fw-bold text-black-50'>EDUCATION</p>
                                        <span className='fs-4 fw-bold'>Save on Mac or iPad with education pricing.</span>
                                    </div>
                            </div>
                            <div className="card text-white me-3">
                                    <img src={Ipad} alt="Mac or Ipad" />                                 
                                    <div className="card-img-overlay">
                                        <p className='fs-6 fw-bold text-white-50'>BUSINESS</p>
                                        <span className='fs-4 fw-bold'>From enterprise to small business we'll work with you.</span>
                                    </div>
                            </div>
                            <div className="card text-white me-3">
                                    <img src={Mac2} alt="Mac or Ipad" />                                 
                                    <div className="card-img-overlay">
                                        <p className='fs-6 fw-bold text-white-50'>GOVERMENT</p>
                                        <span className='fs-4 fw-bold'>Special pricing is avaliable for state, local, and federal agencies.</span>
                                    </div>
                            </div>
                          
                            <div className="card  me-3">
                                <img src={Mac3} alt="Mac or Ipad" /> 
                                    <div className="card-img-overlay">
                                        <p className='fs-6 fw-bold text-black-50'>VETERANS AND MILITARY</p>
                                        <span className='fs-4 fw-bold'>Active and veteran members may be eligible for exlusive savings.</span>
                                    </div>
                            </div>
                        </Carousel>
                </div>
            </div>
        )
    }
}
export default Section8;