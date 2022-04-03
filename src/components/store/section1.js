import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import mac from "../../assets/mac.png";
import iphone from "../../assets/iphone.png";
import ipad from "../../assets/ipad.png";
import watchs from "../../assets/watch.png";
import airpods from "../../assets/airpods.png";
import airtags from "../../assets/airtags.png";
import appletv from "../../assets/appletv.png";
import homepod from "../../assets/homepod.png";
import accesories from "../../assets/accessories.png";
import giftcards from "../../assets/giftcards.png";


const breakPoints = [
        {width:1,itemsToShow:1},
        {width:550 , itemsToShow:4},
        {width:768, itemsToShow:7},
        {width:1200 , itemsToShow:9}
        // {width:1450 , itemsToShow:5,itemsToScroll:2, pagination:true },
        // {width:1750 , itemsToShow:6},
    ];

class Section1 extends Component {
    render(){
        return (
                <div className="d-flex flex-wrap flex-xl-nowrap w-100">
                    <Carousel breakPoints={breakPoints} itemPadding={[0,10]} outerSpacing={30}>
                        <div className="d-flex flex-column">
                            <Link to="/shop-mac"><img src={mac} className="w-100" /></Link>
                            <Text className="align-self-center mt-3">Mac</Text>
                        </div>                    
                        <div  className="d-flex flex-column">
                        <a ><Link to="/shop-iphone"><img src={iphone} className="w-100"/></Link></a>
                            <Text className="align-self-center mt-3">iPhone</Text>
                        </div>
                        <div  className="d-flex flex-column">
                        <a ><Link to="/shop-ipad"><img src={ipad} className="w-100"/></Link></a>
                            <Text className="align-self-center mt-3">iPad</Text>
                        </div>
                        <div  className="d-flex flex-column">
                        <a ><Link to="/shop-watch"><img src={watchs} className="w-100"/></Link></a>
                            <Text className="align-self-center mt-3">Apple Watch</Text>
                        </div>
                        <div  className="d-flex flex-column">
                        <a ><Link to="/airpods"> <img src={airpods}className="w-100"/></Link></a>
                            <Text className="align-self-center mt-3">AirPods</Text>
                        </div>                
                        <div  className="d-flex flex-column">
                            <img src={airtags} className="w-100"/>
                            <Text className="align-self-center mt-3">AirTag</Text>
                        </div>
                        <div  className="d-flex flex-column">
                            <img src={appletv} className="w-100"/>
                            <Text className="align-self-center mt-3">Apple TV</Text>
                        </div>
                        <div  className="d-flex flex-column"> 
                            <img src={homepod} className="w-100"/>
                            <Text className="align-self-center mt-3">HomePod mini</Text>
                        </div>
                        <div  className="d-flex flex-column"> 
                            <img src={accesories} className="w-100"/>
                            <Text className="align-self-center mt-3">Accesories</Text>
                        </div>
                        <div  className="d-flex flex-column"> 
                            <img src={giftcards} className="w-100"/> 
                            <Text className="align-self-center mt-3">Apple Gift Card</Text>
                        </div>
                    </Carousel>
            </div>
        )
    }
}
export default Section1;


const Text = styled.div`
    font-size:14px;
    font-weight:500;
    color:#1d1d1f;
`
