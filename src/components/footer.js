import React, { Component } from "react";
import Style from "./style/footer.module.css"; 
class Footer extends Component {
    render()  {
        return (
                <div className={Style.container}>

                    <div className={Style.hide}>
                        <div>
                            <h1 className="overflow-hidden">Quick Links</h1>
                        </div>
                        <div className="d-flex">
                            <a className="btn btn-light btn-md rounded me-3">Order Status</a>
                            <a className="btn btn-light btn-md rounded me-3">Shopping help</a>
                            <a className="btn btn-light btn-md me-3">Returns</a>
                        </div>
                        <div className={Style.text}>
                            <p>
                            * Pricing for iPhone 13 and iPhone 13 mini includes a $30 carrier instant discount that requires activation with ATandT,
                            T-Mobile, Sprint, or Verizon. Available to qualified customers and requires 24-month installment loan when you
                            select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. 
                            iPhone activation required with ATandT, T-Mobile, Sprint, or Verizon for purchases made with ACMI at an Apple Store. 
                            Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your cards 
                            variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement. Additional 
                            iPhone Payments terms are here. ACMI is not available for purchases made online at special storefronts. The last months 
                            payment for each product will be the products purchase price, less all other payments at the monthly payment amount.
                            </p>
                            <p>
                            ** Offer is available for new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later, for a limited time only. Offer good for 3 months after eligible device pairing. Plan automatically renews at your regions price per month until cancelled. No purchase necessary for current owners of eligible devices. Service availability varies by region. Restrictions and other terms apply.    
                            </p>
                            <p>
                            ◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option available to select at checkout for certain Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your cards variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers:  Sprint, Verizon, or T-Mobile.
                            </p>
                        </div>
                    </div>
                    <hr></hr>


                    <div className={Style.baris}>
                        <ul>
                            <li className={Style.top}>Shop and Learn</li>
                            <li>Mac</li>
                            <li>iPad</li>
                            <li>iPhone</li>
                            <li>Apple Wathch</li>
                            <li>TV Home</li>
                            <li>Music</li>
                            <li>iTunes</li>
                            <li>HomePod</li>
                            <li>iPod touch</li>
                            <li>Apple Card</li>
                            <li>Accesories</li>
                            <li>Gift Cards</li>
                        </ul>
                        <ul>
                            <li className={Style.top}>Apple Store</li>
                            <li>Find a Store</li>
                            <li>Shop Online</li>
                            <li>Genius Bar</li>
                            <li>Today at Apple</li>
                            <li>Youth Programs</li>
                            <li>Apple Store App</li>
                            <li>Refurbished and Clearance</li>
                            <li>Financing</li>
                            <li>Apple Trade In</li>
                            <li>Order Status</li>
                            <li>Shopping Help</li>
                        </ul>
                        <ul>
                            <li className={Style.top}>For Education</li>
                            <li>Apple and Education</li>
                            <li>Shop For College</li>
                            <li className={Style.top}>For Business</li>
                            <li>Apple and Business</li>
                            <li>Shop for Business</li>
                            <li className={Style.top}>Government</li>
                            <li>Shop for Government</li>
                            <li>Shop for Veterans and Military</li>
                        </ul>
                        <ul>
                            <li className={Style.top}>For Healthcare</li>
                            <li>Apple in Healthcare</li>
                            <li>Health on Apple Watch</li>
                            <li className={Style.top}>Apple Values</li>
                            <li>Accessibility</li>
                            <li>Education</li>
                            <li>Environtment</li>
                            <li>Inlclusion and Diversity</li>
                            <li>Privacy</li>
                            <li>Supplier Responsibility</li>
                        </ul>
                        <ul>
                            <li className={Style.top}>Account</li>
                            <li>Manage Your Apple ID</li>
                            <li>Apple Store Account</li>
                            <li>iCloud.com</li>
                            <li className={Style.top}>About Apple</li>
                            <li>Newsroom</li>
                            <li>Apple Leadership</li>
                            <li>Job Opportunities</li>
                            <li>Investors</li>
                            <li>Ethics and Compilance</li>
                            <li>Events</li>
                            <li>Contact Apple</li>
                        </ul>
                    </div>
                    <div className={Style.foot}>
                        <p>More ways to shop: <span>Find an Apple Store</span> or <span>other retailer</span> near you. Or call 1-800-MY-APPLE</p>
                    </div>
                    <hr></hr>
                    <div className={Style.foot}>
                        <p>
                            Copyright © 2022 Apple Inc. All rights reserved.
                        </p>
                    </div>

                </div>
            
        )
    }
}

export default Footer;