import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaRegComments,FaRegBookmark,FaBox,FaShoppingBag,FaApple} from "react-icons/fa";
import Macbookair from "../../assets/mac/macbook-air.jpg";
import Macbook from "../../assets/mac/mac-compare.jpg";
import Hero from "../../assets/mac/hero.jpg";
import Appletv from "../../assets/mac/apple-tv.jpg";

class Buymac extends Component {
    render () {
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
                <Learn className="text-center text-black-50 p-2">
                        Pay for your new Mac over 12 monts at 0% APR with Apple Card. Just choose Apple Card Monthly Installments when you check out to apply.
                        <div>
                            Learn More 
                        </div>
                </Learn>

                <div className="text-center fs-1 fw-bolder mt-5 ">
                        Choose your new MacBook Air
                         <br></br>
                        and select a finish. 
                </div>

                <div className="text-center mt-4 fs-5 fw-bold text-black">
                    13-inch MacBook Air
                </div>
                <div className="text-center mt-2 fs-4">
                    <FaRegComments />
                </div>
                <div className="text-center mt-2 fs-5 lh-base">
                    <p>Have a questions about buying a Mac?</p>
                    <p className="text-primary">Chat with a Mac Spesialist.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-3">
                       <img src={Macbookair} className="w-75"/>
                       <p className="fs-4 fw-bold">
                            Apple M1 Chip with 8-Core CPU and 7-Core GPU
                            256GB Storage
                       </p>
                        <small className="text-black-50 text-break">
                            Apple M1 chip with 8core CPU, 7core GPU, and 16core Neural Engine
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            8GB unified memory
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            256GB SSD storage
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Retina display with True Tone
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Magic Keyboard
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Touch ID
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Force Touch trackpad
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Two Thunderbolt / USB 4 ports
                        </small><br></br>
                        <p className="fs-4 fw-bold mt-3">
                            $999.00
                        </p>
                        <small className="text-black-50 text-break">
                            or
                        </small><br></br>
                        <p className="fs-4 fw-bold mt-3">
                            $83.25/mo. for 12 mo.*
                        </p>
                        <small className="text-primary">
                        Learn how to pay monthly at 0% APR when you choose Apple Card Monthly Installments
                        </small><br></br>
                        <br></br>
                        <small className="fw-bold">Apple Trade In</small><br></br>
                        <small>
                        Get credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.Footnote◊◊
                        </small> 
                        <p className="text-primary mt-3">
                            Get Started  
                        </p>   
                        <button className="btn btn-primary w-100 rounded">Select</button>   

                        <div className="d-flex flex-row mt-5">
                            <div>
                                <small className="fw-bold">Still deciding?</small>
                                <br></br>
                                <small>Add this item to a list and easily come back to it later.</small>
                            </div>
                            <div className="fs-4">
                                <FaRegBookmark />
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <div className="me-3">
                                <FaBox />
                            </div>
                            <div>
                                <small className="fw-bold">ships:</small>
                                <br></br>
                                <small>1-3 Business days</small><br></br>
                                <small>Free Shipping</small><br></br>
                                <small className="text-primary">Get delivery dates</small><br></br>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <div className="me-3">
                                <FaShoppingBag />
                            </div>
                            <div>
                                <small className="fw-bold">Pickup:</small>
                                <br></br>
                                <small className="text-primary">Check availability</small>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-3">
                       <img src={Macbookair}  className="w-75"/>
                       <p className="fs-4 fw-bold">
                            Apple M1 Chip with 8-Core CPU and 8-Core GPU
                            512GB Storage
                       </p>
                        <small className="text-black-50 text-break">
                            Apple M1 chip with 8core CPU, 8-core GPU, and 16core Neural Engine
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            8GB unified memory
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            256GB SSD storage
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Retina display with True Tone
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Magic Keyboard
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Touch ID
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Force Touch trackpad
                        </small><br></br>
                        <small className="text-black-50 text-break">
                            Two Thunderbolt / USB 4 ports
                        </small><br></br>
                        <p className="fs-4 fw-bold mt-3">
                            $1,249.00
                        </p>
                        <small className="text-black-50 text-break">
                            or
                        </small><br></br>
                        <p className="fs-4 fw-bold mt-3">
                            $104.08/mo. for 12 mo.*
                        </p>
                        <small className="text-primary">
                        Learn how to pay monthly at 0% APR when you choose Apple Card Monthly Installments
                        </small><br></br>
                        <br></br>
                        <small className="fw-bold">Apple Trade In</small><br></br>
                        <small>
                        Get credit toward a new Mac when you trade in your eligible computer. Or recycle it for free.Footnote◊◊
                        </small> 
                        <p className="text-primary mt-3">
                            Get Started  
                        </p>   
                        <button className="btn btn-primary w-100 rounded">Select</button>   

                        <div className="d-flex flex-row mt-5">
                            <div>
                                <small className="fw-bold">Still deciding?</small>
                                <br></br>
                                <small>Add this item to a list and easily come back to it later.</small>
                            </div>
                            <div className="fs-4">
                                <FaRegBookmark />
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <div className="me-3">
                                <FaBox />
                            </div>
                            <div>
                                <small className="fw-bold">ships:</small>
                                <br></br>
                                <small>1-3 Business days</small><br></br>
                                <small>Free Shipping</small><br></br>
                                <small className="text-primary">Get delivery dates</small><br></br>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-5">
                            <div className="me-3">
                                <FaShoppingBag />
                            </div>
                            <div>
                                <small className="fw-bold">Pickup:</small>
                                <br></br>
                                <small className="text-primary">Check availability</small>
                            </div>
                        </div>



                    </div>
                </div>
               
               
                <Models className='text-center pt-5'>
                        <h2 className="fs-3 fw-bolder overflow-hidden">
                            Compare Mac models
                        </h2>
                        <p className='text-primary'>
                            Find the best Mac for you >
                        </p>

                        <img src={Macbook} className="w-auto"/>
                </Models>

                <div className='text-center mt-5'>
                        <img src={Hero} className="w-auto"/>
                </div>
                <div className='mt-5'>
                        <h2 className='fw-bolder fs-2 text-center mb-3'>AppleCare+ for Mac</h2>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <p>
                                Every Mac comes with a  one-year limited warranty (opens in a new window) and up to 90 days of complimentary technical support(opens in a new window). AppleCare+ for Mac extends your coverage from your AppleCare+ purchase date and adds up to two incidents of accidental damage protection every 12 months, each subject to a service fee of $99 for screen damage or external enclosure damage, or $299 for other accidental damage, plus applicable tax. In addition, youll get 24/7 priority access to Apple experts via chat or phone. For complete details, see the terms
                            </p>
                            <p className="text-center text-primary">
                                Learn more about AppleCare+ >
                            </p>
                        </div>
                    </div>
                </div>
                

                <Models2 className='text-center pt-5'>
                        <h2 className="fs-3 fw-bolder overflow-hidden">
                           Shopping for your business?
                        </h2>
                        <p>Create a business account to start qualifying for special pricing.</p>
                        <p className='text-primary'>
                            Sing up now >
                        </p>

                </Models2>


                <div className='row justify-content-center'>
                    <div className='d-flex w-75 bg-dark'>
                        <div className="flex-column mt-5 ms-5">
                            <h2 className='fw-bold overflow-hidden text-white'> <FaApple className="fs-3"/>tv+</h2>
                            <p className='w-75 text-white'>Get 3 months of Apple TV+ free when you buy a Mac</p>
                            <div className='d-flex'>
                                <p className='text-primary me-3'>Try it free ></p>
                                <p className='text-primary'>Learn more ></p>
                            </div>
                        </div>                        
                            <img src={Appletv} className="w-auto"/>
                    </div>
                </div>



            </div>
        )
    }
}

export default Buymac;


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

const Learn = styled.div`
    width:100%;
    height:60px;
    background-color:rgb(0,0,0,0.1);
    font-size:13px;
        div{
            color:blue;
        }
`

const Models = styled.div`
    background-color:rgb(250,250,250,0.7);
    width:100%;
    height:100vh;

`
const Models2 = styled.div`
    background-color:rgb(250,250,250,0.7);
    width:100%;
    height:40vh;

`