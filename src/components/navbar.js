import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./style/navbar.module.css";
import {FaApple , FaSistrix , FaShoppingBag} from "react-icons/fa";
class Navbar extends Component {
    render(){
        return (
           <nav>
                <div className={Styles.header}>
                    <ul className={Styles.mob}>
                        <li>
                            <Link to="/">
                                <FaApple className="fs-4"/>
                            </Link>
                        </li>
                    </ul>
                    <ul className={Styles.menu}>
                        <li>
                            <Link to="/">
                                <FaApple className="fs-5"/>
                            </Link>
                        </li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/shop-mac">Mac</Link></li>
                        <li><Link to="#">iPad</Link></li>
                        <li><Link to="#">iPhone</Link></li>
                        <li><Link to="#">Watch</Link></li>
                        <li><Link to="#">AirPods</Link></li>
                        <li><Link to="#">TV Home</Link></li>
                        <li><Link to="#">Only on Apple</Link></li>
                        <li><Link to="#">Accesories</Link></li>
                        <li><Link to="#">Support</Link></li>
                        <li>
                            <Link to="/">
                                    <FaSistrix className="fs-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                    <FaShoppingBag className="fs-6"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;