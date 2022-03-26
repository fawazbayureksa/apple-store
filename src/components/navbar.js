import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./style/navbar.module.css";
import {FaApple , FaSistrix , FaShoppingBag} from "react-icons/fa";
class Navbar extends Component {
    render(){
        return (
            <div className="navi">
                <ul class="nav justify-content-center bg-dark nav-pills flex-column flex-sm-row">
                    <FaApple className="mob"/>
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-white ">
                            <FaApple className="fs-5" />
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/store" class="flex-sm-fill text-sm-center nav-link text-white">Store</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="text-sm-center nav-link text-white">Mac</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-ipad" class="nav-link text-white">iPad</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="nav-link text-white">iPhone</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="nav-link text-white">Watch</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="nav-link text-white">AirPods</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="nav-link text-white">TV Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="nav-link text-white">Only on Apple</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop-mac" class="nav-link text-white">Accesories</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-white">
                            <FaSistrix className="fs-6" />
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-white">
                            <FaShoppingBag className="fs-6" />
                        </Link>
                    </li>
                </ul>
                </div>
             
            
        )
    }
}

export default Navbar;