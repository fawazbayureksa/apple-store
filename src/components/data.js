import img1 from "../assets/mac/asset-1.jpeg"
import img2 from "../assets/mac/asset-5.jpeg"
import img3 from "../assets/mac/asset-8.jpeg"
import img4 from "../assets/mac/asset-11.jpeg"

import ip1 from "../assets/iphone/asset-1.jpeg";
import ip2 from "../assets/iphone/asset-7.jpeg";
import ip3 from "../assets/iphone/asset-14.jpeg";
import ip4 from "../assets/iphone/asset-5.jpeg";

import ipad1 from "../assets/ipad/asset-1.jpeg";
import ipad2 from "../assets/ipad/asset-4.jpeg";
import ipad3 from "../assets/ipad/asset-10.jpeg";
import ipad4 from "../assets/ipad/asset-13.jpeg";


import watch1 from "../assets/watch/asset-1.jpeg";
import watch2 from "../assets/watch/asset-8.jpeg";
import watch3 from "../assets/watch/asset-12.jpeg";
import watch4 from "../assets/watch/asset-13.jpeg";

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
    ],
    productIpad:
    [
        {
            id:1,
            title:"iPad Pro",
            price:799,
            image:ipad1
        },
        {
            id:2,
            title:"iPad Air",
            price:599,
            image:ipad2
        },
        {
            id:3,
            title:"iPad",
            price:599,
            image:ipad3
        },
        {
            id:4,
            title:"iPad mini",
            price:499,
            image:ipad4
        }
    ],

    productWatch:
    [
        {
            id:1,
            title:"Apple Watch Series 7",
            price:399,
            image:watch1
        },
        {
            id:2,
            title:"Apple Watch SE",
            price:279,
            image:watch2
        },
        {
            id:3,
            title:"Apple Watch Series 3",
            price:199,
            image:watch3
        },
        {
            id:4,
            title:"Apple Watch Nike",
            price:399,
            image:watch4
        },
    ]
}
 

export default data;