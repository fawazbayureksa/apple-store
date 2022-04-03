import React, { Component } from 'react';
import styled from 'styled-components';
import Style from '../../components/style/checkout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegComments,FaRegBookmark,FaBox,FaShoppingBag,FaApple} from "react-icons/fa";
import Macbookair from "../../assets/mac/macbook-air.jpg";
import Macbook from "../../assets/mac/asset-15.jpg";
import Kabel from "../../assets/mac/asset-16.jpg";
import Cas from "../../assets/mac/asset-17.jpg";
import Appletv from "../../assets/mac/apple-tv.jpg";
// import  {useCart}  from 'react-use-cart';
// import data from "../data";


const Comac = (props) => {

  

return (
            <div >   
                <Nav className="d-flex align-items-center overflow-hidden">
                        <Navtext className="fs-5 fw-bold me-auto">
                            MacBook Air
                        </Navtext>
                        <Navlink className="d-flex">
                            <li className="mx-3">Overview</li>
                            <li className="mx-3">macOS</li>
                            <li className="mx-3">Tech Specs</li>
                        </Navlink>
                </Nav>

                <div className='d-flex justify-content-center mt-5'>
                    <div className='col-md-4'>
                        <img src={Macbookair} className="w-100 p-2"/>
                        <p className='text-center text-primary'>Viw Gallery</p>
                        <div className='row justify-content-center'>
                            <div className='col-md-5 fs-4 text-center'>
                                <FaBox />
                                <P>Get free delivery, or pick up available items at an Apple Store</P>
                            </div>
                            <div className='col-md-3 fs-4 text-center'>
                                <FaBox />
                                <P>Free and easy returns</P>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='d-flex justify-content-center'>
                            <div>
                                <FaRegComments className='fs-4 me-3'/>
                            </div>
                            <div>
                                <P>Have questions about buying a Mac?</P>
                                <P className='text-primary'>Chat with a Mac Specialist</P>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 ms-3'>
                       
                        <Scroll className={Style.scroll}> 
                                <p className='fs-2 fw-bolder '>
                                    Customize your MacBook Air &#45; Space Gray
                                </p>
                                <p>Apple M1 chip with 8&#45;core CPU, 7&#45;core GPU, and 16&#45;core Neural Engine</p>
                                <p>8GB unified memory</p>
                                <p>256GB SSD storage</p>
                                <p>Retina display with True Tone</p>
                                <p>Backlit Magic Keyboard &#45; US English</p>
                                <p>Touch ID</p>
                                <p>Force Touch trackpad</p>
                                <p>Two Thunderbolt / USB 4 ports</p>
                                <p className='text-primary'>Learn more about the Apple M1 chip &gt;</p>
                                <hr className='w-75'></hr>
                                <p className='fw-bold'>Apple Trade In</p>
                                <p>Get credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.Footnote◊◊</p>
                                <p className='text-primary'>Get Started</p>
                                <hr></hr>
                                <p className='fw-bold'>Memory</p>
                                <p className='text-primary'>How much memory is right for you?</p>
                                <Box>
                                    <p className='fs-6 fw-bold'>8GB unified memory</p>
                                </Box>
                                <Box className='mt-3'>
                                    <p className='fs-6 fw-bold'>16GB unified memory</p>
                                </Box>
                                <p className='fw-bold mt-4'>Storage</p>
                                <p className='text-primary'>How much Storage is right for you?</p>
                                <Box>
                                    <p className='fs-6 fw-bold'>256GB SSD storage</p>
                                </Box>
                                <Box className='mt-3'>
                                    <p className='fs-6 fw-bold'>512GB SSD storage</p>
                                </Box>
                                <Box className='mt-3'>
                                    <p className='fs-6 fw-bold'>1TB SSD storage</p>
                                </Box>
                                <Box className='mt-3'>
                                    <p className='fs-6 fw-bold'>2TB SSD storage</p>
                                </Box>
                                <p className='fw-bold mt-4'>Keyboard Language</p>
                                <p className='text-primary'>Learn more</p>
                                <div className='mb-5'>
                                    <select className='form-control mt-2'>
                                    <option selected>Backlit Magic Keyboard - US English</option>
                                        <option value="1">Backlit Magic Keyboard - US Arabic</option>
                                        <option value="2">Backlit Magic Keyboard - US Bristish</option>
                                        <option value="3">Backlit Magic Keyboard - US Chinese</option>
                                    </select>
                                </div>
                                <h3 className='fs-4 fw-bolder overflow-hidden'>Pre-Installed Software</h3>
                                <p className='fw-bold mt-4'>Final Cut Pro</p>
                                <p className='text-primary'>Learn more</p>

                                <div className='d-flex mt-3'>
                                    <Boxs className='border-primary border-3'>
                                        <p className='fs-6 fw-bold'>None</p>
                                    </Boxs>
                                    <Boxs>
                                        <p className='fs-6 fw-bold'>Final Cut Pro</p>                                       
                                    </Boxs>
                                </div>
                                <p className='fw-bold mt-4'>Logic Pro</p>
                                <p className='text-primary'>Learn more</p>

                                <div className='d-flex mt-3 mb-5'>
                                    <Boxs className='border-primary border-3'>
                                        <p className='fs-6 fw-bold'>None</p>
                                    </Boxs>
                                    <Boxs>
                                        <p className='fs-6 fw-bold'>Logic Pro</p>                                       
                                    </Boxs>
                                </div>
                                <Box className='d-flex bg-light border-light flex-row'>
                                    <div>
                                        <p className='fw-bold'>Still deciding?</p>
                                        <p>Add this item to a list and easily come back to it later.</p>
                                    </div>
                                    <div className='text-primary mt-2 fs-4'>
                                        <FaRegBookmark />
                                    </div>
                                </Box>
                        </Scroll>
                    </div>
                </div>
                <hr className='w-auto'></hr>
                    <div className='text-center mt-5'>
                        <h1 className='fw-bolder overflow-hidden'>Whats in the Box</h1>
                    </div>
                    <div className='bg-light d-flex justify-content-center'>
                            <img src={Macbook} className="w-50"/>
                            <img src={Kabel}/>
                            <img src={Cas}/>
                    </div>
                <div className='row justify-content-center mt-5 '>
                    <div className='d-flex w-75 bg-dark'>
                        <div className="flex-column mt-5 ms-5">
                            <h2 className='fw-bold overflow-hidden text-white'> <FaApple className="fs-3"/>tv+</h2>
                            <p className='w-75 text-white'>Get 3 months of Apple TV+ free when you buy a Mac</p>
                            <div className='d-flex'>
                                <p className='text-primary me-3'>Try it free &gt;</p>
                                <p className='text-primary'>Learn more &gt;</p>
                            </div>
                        </div>                        
                            <img src={Appletv} className="w-auto"/>
                    </div>
                </div>

                <Footer className="p-0 overflow-hidden border-top-0">` `
                    <div className='d-flex container justify-content-center px-5'>
                        <div className='col-md-4 col-lg-3'>
                            <FaBox/>
                                <p className="fw-bold"> 
                                Ships: </p>
                                <p>free shipping</p>
                                <small className='text-primary'>Get delivery dates</small>
                        </div>
                            <div className='col-md-4 col-lg-3'>
                                    <FaShoppingBag/>
                                    <p className='fw-bold'>Pick up:</p>
                                    <small className='text-primary'>Check Availability</small>
                            </div>
                            <div className='col-md-4 col-lg-3'>
                                <div>
                                    <button className='btn btn-primary'>Add to Cart
                                        <FaShoppingBag className='ms-2'/>
                                    </button>
                                </div>
                            </div>
                    </div>
                </Footer>

            </div>
        )
}

export default Comac;


const Nav = styled.div`
    width:100%;
    height:50px;
    border-bottom:1px solid gray;
`

const Navtext = styled.div`
    margin-left:205px;
`
const Navlink = styled.div`
    margin-right:185px;
    font-size:12px;
    
`
const Scroll = styled.div`
    overflow-y:scroll;
    height:600px;
    p{
        font-size:14px;
    }
`

const Box = styled.div`
    width:100%;
    height:80px;
    border:1px solid gray;
    cursor:pointer;
    border-radius:10px;
    display:flex;
    flex-direction:column;

    justify-content:center;

    p{
        align-self:start;
        margin-left:30px      
` 

const Boxs = styled.div`
    width:50%;
    height:80px;
    border:1px solid gray;
    cursor:pointer;
    border-radius:5px;
    display:flex;
    justify-content:center;

    p{
        align-self:center;   
        
    
` 
const P = styled.div`
        font-size:12px;
`

const Footer = styled.div`
        width:100%;
        height:140px;
        background: #d9e7f5;
        position: fixed;
        bottom: 0;
        z-index: 1;
        p{
            font-size:14px;
        }
`