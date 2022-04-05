import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FaApple , FaSistrix , FaShoppingBag} from "react-icons/fa";
import Cart from "./Cart";  
import { useCart } from "react-use-cart";
const Navbar = () => {

    const {totalUniqueItems,totalItems} = useCart();

        return (
            <div className="navi">
                <ul className="nav justify-content-center bg-dark nav-pills flex-column flex-sm-row">
                    <FaApple className="mob"/>
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white ">
                            <FaApple className="fs-5" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/store" className="flex-sm-fill text-sm-center nav-link text-white">Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="text-sm-center nav-link text-white">Mac</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-ipad" className="nav-link text-white">iPad</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="nav-link text-white">iPhone</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="nav-link text-white">Watch</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="nav-link text-white">AirPods</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="nav-link text-white">TV Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="nav-link text-white">Only on Apple</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop-mac" className="nav-link text-white">Accesories</Link>
                    </li>
               
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white">
                            <FaSistrix className="fs-6" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FaShoppingBag className="badge-notif fs-6" data-badge="1" />
                            <span class="badge bg-danger">{totalItems}</span>
                        </button>
                    </li>
                </ul>
                
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                    
                    
                            <Cart />
                       
                   
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>


            </div>
            
        )
}

export default Navbar;