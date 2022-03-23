import React , {Component} from 'react';
import styled from 'styled-components';
import Carousel from "react-elastic-carousel";
import Section from "./style/section.module.css";
import Iphone from "../assets/iphone-13s.jpg";
import Ipad from "../assets/ipad.jpg";
import Macstudio from "../assets/mac-studio.jpg";
import Studio from "../assets/studio.jpg";
import Card13 from "../assets/card-iphone-13.jpg";
import Cardse from "../assets/card-iphone-se.jpg";

const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:1 },
    {width:768, itemsToShow:2 , outerSpacing:150},
    {width:1200 , itemsToShow:3, outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];


class Section2 extends Component {
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
                <div className="row justify-content-center">
                    <Carousel breakPoints={breakPoints} >
                    {/* <div className="col-md-4 mb-3"> */}
                        <div className="card rounded">
                            <img src={Iphone} alt="Iphone-13"/>                   
                            <div className="card-img-overlay">
                                <Small className='text-black-50'>IPHONE 13 PRO</Small><br></br>
                                <span className='fs-5 fw-bold'>Oh. So. Pro.</span>
                                <p>Now in Alpine Green. From $999.00 or $41.62/mo. for 24 mo</p>     
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-md-4 mb-3"> */}
                        <div className="card text-white">
                        <img src={Ipad} alt="Iphone-13" />                    
                            <div className="card-img-overlay">
                                <Small className='text-white-50'>IPAD AIR</Small><br></br>
                                <span className='fs-5 fw-bold'>Light. Bright.Full of might.</span>
                                <p>From %599 or $49.91/mo. for 12 mo.</p>     
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-md-4 mb-3"> */}
                        <div className="card rounded-md">
                        <img src={Macstudio} alt="Iphone-13" />                             
                            <div className="card-img-overlay">
                                <Small className='text-black-50'>MAC STUDIO</Small><br></br>
                                <span className='fs-5 fw-bold'>Empowe station.</span>
                                <p>From $1999 or $165.58/mo. for 12 mo.</p>     
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-md-4 mb-3"> */}
                        <div className="card rounded-md">
                        <img src={Studio} alt="Iphone-13" />                             
                            <div className="card-img-overlay">
                                <Small className='text-black-50'>STUDIO DISPLAY</Small><br></br>
                                <span className='fs-5 fw-bold'>A sight to be bold.</span>
                                <p>From $1599 or $133.25/mo. for 12 mo.</p>     
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-md-4 mb-3"> */}
                        <div className="card rounded-md">
                        <img src={Cardse} alt="Iphone-13" />                             
                            <div className="card-img-overlay">
                                <Small className='text-black-50'>IPHONE SE</Small><br></br>
                                <span className='fs-5 fw-bold'>Love the power Love the price.</span>
                                <p>From $429 or $17.87/mo. for 24 mo.</p>     
                            </div>
                        </div>
                    {/* </div> */}
                    {/* <div className="col-md-4 mb-3"> */}
                        <div className="card rounded-md">
                        <img src={Card13} alt="Iphone-13" />                             
                            <div className="card-img-overlay">
                                <Small className='text-black-50'>IPHONE 13</Small><br></br>
                                <span className='fs-5 fw-bold'>Your new superpower.</span>
                                <p>Now in Green. From $699.00 or $29.12/mo. for 24 mo.*</p>     
                            </div>
                        </div>
                    {/* </div> */}
                 
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default Section2;


const Small = styled.div`
    font-size:12px;

`