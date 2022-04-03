import React from "react";
import styled from 'styled-components';
import  {useCart}  from 'react-use-cart';
import Styles from "../style/mac.module.css";
import { Link } from "react-router-dom";


const Card = (props) => {
    
    const {addItem} = useCart();    

    return ( 
        <>
            <div className='card rounded shadow me-3'>
                <div className='card-body'>
                    <Topcard> 
                        {props.title}
                    </Topcard>
                <Link to="/buy-iphone">
                    <img src={props.image} className="card-img-bottom p-3" />
                </Link>
                    <div className='d-flex'>
                        <span className={Styles.textcard}>From $ {props.price} or {Math.round(props.price/12)} for 12 mo.*</span>
                        <button className="btn btn-primary btn-md ms-3"  onClick={() => addItem(props.item)} >Buy</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Card;


const Topcard = styled.div`
    
    margin-top:20px;
    font-size: 30px;
    font-weight: 700;
`