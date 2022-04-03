import React, { Component } from 'react';
import Styles from "../style/mac.module.css";
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import data from '../data';
import Card from '../card/Card';


import 'bootstrap/dist/css/bootstrap.min.css';



const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:1},
    {width:768, itemsToShow:2 , outerSpacing:150},
    {width:1200 , itemsToShow:3 , outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];
const breakPoints2 = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:3},
    {width:768, itemsToShow:5 },
    {width:1200 , itemsToShow:7}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];
class Shopwatch extends Component {
    render (){
        return (
            <div>
                <div className='container'>
                <div className='row justify-content-start mt-5 ms-5 ps-5'>
                        <div className='col-md-9 text-left'>
                            <div className={Styles.text}>
                                <span>Shop Apple Watch</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className={Styles.text1}> 
                                <p>Need Shopping help?</p>
                                <p className='text-primary'>Ask a Spesialist</p>
                                <p>Visit a Apple Store</p>
                                <p className='text-primary'>Find one near you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row ms-5 mt-5 mb-5 '>
                <Carousel breakPoints={breakPoints2} className="overflow-hidden">
                    <li>All Models</li>
                    <li>Shopping Guides</li>
                    <li>Ways to Save</li>
                    <li>The Apple Difference</li>
                    <li>Accessories</li>
                    <li>Setup and Support</li>
                    <li>Do More</li>
                    <li>Shop by Group</li>                
                </Carousel>
                </div>
                <div className="container">
                    <div className='ps-4 ms-5 '>
                        <h3 className='fs-3 fw-bold text-black-50 overflow-hidden'><span className='text-black'>All models.</span> Take your pick</h3>
                    </div>
                </div>

                <div className='row'>
                    <Carousel breakPoints={breakPoints}>
                    {data.productWatch.map((item,index) => {
                            return( 
                                <Card 
                                item={item} 
                                title={item.title} 
                                image={item.image} 
                                price={item.price}    
                                key={index}    
                                />
                             )
                        })}
                     </Carousel> 
                </div>
            </div>
        )
    }
}
export default Shopwatch;

const Topcard = styled.div`
    
    margin-top:20px;
    font-size: 30px;
    font-weight: 700;
`