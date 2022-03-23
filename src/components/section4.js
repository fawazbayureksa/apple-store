import React, { Component } from 'react';
import Section from "../components/style/section.module.css";
import Carousel from 'react-elastic-carousel';
import {FaShoppingBag, FaBox,FaRegGrinAlt,FaLaptop,FaRegCreditCard} from "react-icons/fa";


const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550 , itemsToShow:1},
    {width:768, itemsToShow:3 ,outerSpacing:150},
    {width:1200 , itemsToShow:4 ,outerSpacing:150}
    // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
    // {width:1750 , itemsToShow:6},
];

class Section4 extends Component {
    render (){
        return (
            <div>
                <div className='container'>
                    <div className="row justify-content-center ms-4 ps-4 mt-5">
                        <div className={Section.text}>
                            <p> 
                                <span>The Apple difference. </span>
                                Even more reasons to shop with us
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap flex-xl-nowrap justify-content-space-between">
                    <Carousel breakPoints={breakPoints}>
                        <div className="card card-body fs-5 fw-bold p-3 me-3">
                            <div className={Section.icon_biru}>
                                <FaShoppingBag />
                            </div>
                            <p>
                                <span className={Section.biru}>Convenient pickup options </span>                    
                                that fit into your everyday schedule.
                            </p>
                        </div>
                        <div className="card card-body fs-5 fw-bold p-3 me-3">
                            <div className={Section.icon_pink}>
                                <FaBox />
                            </div>
                            <p>
                                Choose fast, free delivery or
                                <span className={Section.pink}> two-hour courier delivery.</span>                    
                            </p>
                        </div>
                        <div className="card card-body fs-5 fw-bold p-3 me-3">
                            <div className={Section.icon_biru}>
                                <FaRegGrinAlt />
                            </div>
                            <p>
                                Make them yours. 
                                <span className={Section.biru}> Engrave a mix of emoji, names, and numbers for.</span>                    
                            </p>
                        </div>
                        <div className="card card-body fs-5 fw-bold p-3 me-3">
                            <div className={Section.icon_ungu}>
                                <FaLaptop />
                            </div>
                            <p>
                                <span className={Section.ungu}>Trade in your current device. </span>                    
                                Get credit toward a new one.
                            </p>
                        </div>
                        <div className="card card-body fs-5 fw-bold p-3 me-3">
                            <div className={Section.icon_hijau}>
                                <FaRegCreditCard />
                            </div>
                            <p>Pay in full or 
                                <span className={Section.hijau}>pay over time.</span>                    
                                Your choice for free a new one.
                            </p>
                        </div>
                    </Carousel>
            </div>
        </div>
        )
    }
}
export default Section4;