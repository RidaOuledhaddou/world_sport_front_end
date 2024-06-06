import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare

} from "@iconscout/react-unicons"

import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'

export const SidebarData = [
    {
        icon : UilEstate,
        heading : "Dashboard",
        link : 'Dashboard'
    },
    {
        icon : UilClipboardAlt,
        heading : "Orders",
        link : 'Show_orders'
    },
    {
        icon : UilUsersAlt,
        heading : "Customers",
        link : 'Customers'
    },
    {
        icon : UilPackage,
        heading : "Products",
        link : 'ProductsCustomer'
    },
    {
        icon : UilChart,
        heading : "Analytics",
        link : 'Analytics'
    },
];





// Assuming CardsData is already defined as shown in your example
export let CardsData = [
    {
        title: "Sales",
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5'
        },
        barValue: 0,
        value: '0',
        png: UilUsdSquare, // Make sure this import is correct
        series: [{
            name: 'Sales',
            data: []
        }],
    },
    {
        title: "Revenue",
        color: {
            backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7'
        },
        barValue: 0,
        value: '0',
        png: UilMoneyWithdrawal,
        series: [
            {
                name: 'Revenue',
                data: []
            },
        ],
    },
    {
        title: "Requests",
        color: {
            backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)',
            boxShadow: '0px 10px 20px 0px #F9D59B'
        },
        barValue: 0,
        value: '0',
        png: UilUsdSquare,
        series: [
            {
                name: 'Expenses',
                data: []
            },
        ],
    },
];

export const fetchAndUpdateSalesData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/getSalesData');
        const data = await response.json();
        
        // Find and update only the 'Sales' card within CardsData
        const salesCardIndex = CardsData.findIndex(card => card.title === "Sales");
        if (salesCardIndex !== -1) {
            CardsData[salesCardIndex] = {
                ...CardsData[salesCardIndex], // Spread existing properties
                barValue: data.barValue,
                value: data.value,
                series: [{
                    name: 'Sales',
                    data: data.series[0].data,
                }],
            };
        }
    } catch (error) {
        console.error('Failed to fetch sales data:', error);
    }
};



