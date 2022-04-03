import img1 from "../assets/mac/asset-1.jpeg"
import img2 from "../assets/mac/asset-5.jpeg"
import img3 from "../assets/mac/asset-8.jpeg"
import img4 from "../assets/mac/asset-11.jpeg"

import ip1 from "../assets/iphone/asset-1.jpeg";
import ip2 from "../assets/iphone/asset-7.jpeg";
import ip3 from "../assets/iphone/asset-14.jpeg";
import ip4 from "../assets/iphone/asset-5.jpeg";

const data = {
    productMac:
    [
        {
            id:1,
            title:"MakBook Air",
            price:999,
            image:img1
        },
        {
            id:2,
            title:"MakBook Pro 13",
            price:1299, 
            image:img2
        },
        {
            id:1,
            title:"MakBook Pro 14",
            price:1999,
            image:img3
        },
        {
            id:1,
            title:"MakBook Pro 16",
            price:2499,
            image:img4
        }
    ],
    productIphone:
    [
        {
            id:1,
            title:"iPhone 13 Pro",
            price:999,
            image:ip1
        },
        {
            id:2,
            title:"iPhone 13 ",
            price:699,
            image:ip2
        },
        {
            id:1,
            title:"iPhone SE",
            price:429,
            image:ip3
        },
        {
            id:1,
            title:"iPhone 12",
            price:599,
            image:ip4
        }
    ]
}
 

export default data;