import React , {Component} from 'react';
import styled from "styled-components";
import Carousel from 'react-elastic-carousel';
import Section from "./style/section.module.css";
import Asset18 from "../assets/asset-18.jpeg";
import Iphone from "../assets/asset-19.jpeg";
import Silicone1 from "../assets/asset-26.jpeg";
import Silicone2 from "../assets/asset-31.jpeg";

const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:2},
    {width:768, itemsToShow:3, outerSpacing:150 },
    {width:1200 , itemsToShow:3,outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];

class Section5 extends Component {
    render () {
        return (
            <div>
                <div className='container'>
                    <div className="row justify-content-center ms-4 ps-4 mt-5">
                        <div className={Section.text}>
                            <p> 
                                <span> The latest. </span>
                                Take a look at what's new, right now.     
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row flex-wrap flex-lg-nowrap">
                    <Carousel breakPoints={breakPoints}>
                        <div className="card me-3">
                            <img src={Asset18} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                                <Span className="fs-4 fw-bold">In with the new.</Span>
                                <p className="fs-6">Discover fresh new colors for your favorite accessories.</p>         
                            </div>
                        </div>                       

                        <div className="card me-3">
                            <div className="card-body">
                                <img src={Iphone} alt="Iphone-13" className="card-img p-3"/>                   
                                <small className="text-danger">New</small>                  
                                <p className="fw-bold">iPhone 13 Pro Silicone Case with MagSafe - Nectarine</p>
                                <small className="text-black-50">$49.00</small>       
                            </div>
                        </div>                       
                        <div className="card me-3">
                            <div className="card-body">
                            <img src={Silicone2} alt="Iphone-13" className="card-img p-3"/>                
                                <small className="text-danger">New</small>                  
                                <p className="fw-bold">iPhone 13 Pro Silicone Case with MagSafe - Nectarine</p>
                                <small className="text-black-50">$49.00</small>       
                            </div>
                        </div>                       
        
                        <div className="card">
                            <div className="card-body me-3">
                            <img src={Silicone2} alt="Iphone-13" className="card-img p-3"/>                
                                <small className="text-danger">New</small>                  
                                <p className="fw-bold">iPhone 13 Pro Silicone Case with MagSafe - Nectarine</p>
                                <small className="text-black-50">$49.00</small>       
                            </div>
                        </div>                       
                 
                </Carousel>
                </div>
            </div>
        )
    }
}
export default Section5;

const Text = styled.div`
    width:70%;
    margin-bottom:18px;

`
const Span = styled.div`
    margin-top:20px;
`