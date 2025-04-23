import electronics from './assets/categories/Electronics_photo.jpg'
import chemicalImage from './assets/categories/chemical.jpg'
import image1 from './assets/images/1.JPG'
import image2 from './assets/images/2.JPG'
import image3 from './assets/images/3.JPG'
import image4 from './assets/images/4.JPG'
import image5 from './assets/images/5.JPG'
import image6 from './assets/images/6.JPG'
import image7 from './assets/images/7.JPG'
import image8 from './assets/images/8.JPG'
import image9 from './assets/images/9.JPG'
import image10 from './assets/images/10.JPG'
import image11 from './assets/images/11.JPG'
import image12 from './assets/images/12.JPG'
import image13 from './assets/images/13.JPG'
import image14 from './assets/images/14.JPG'
import image15 from './assets/images/15.JPG'
import image16 from './assets/images/16.JPG'
import image17 from './assets/images/17.JPG'
import image18 from './assets/images/18.JPG'
import image19 from './assets/images/19.JPG'
import image20 from './assets/images/20.jpeg'
import missionIcon from './assets/icons/mission.webp'
import visionIcon from './assets/icons/vision.webp'
import valueIcon from './assets/icons/our-value.webp'
import asusLogo from './assets/partner_logos/asus.png'
import DeliLogo from './assets/partner_logos/Deli.jpg'
import DELLLogo from './assets/partner_logos/DELL.jpg'
import HPLogo from './assets/partner_logos/HP.jpg'
import maxellLogo from './assets/partner_logos/maxell.jpg'
import OKILogo from './assets/partner_logos/OKI.png'
import Computing_device from './assets/categories/Computing_device.png'
import Office_Equipments from './assets/categories/office_equipments.jpg'
import printer from './assets/categories/printer.jpg'
import Med_Equipments from './assets/categories/Med_Equipments.jpg'
import Digital_Boards from './assets/categories/Digital_Boards.jpg'
import Banking_Equipments from './assets/categories/Banking_Equipments.jpg'






export const category = [
    {
        imageUrl: electronics,
        title:'Computer Electronics',
        desc:'This is a Computer Electronic',
        linkToGo:"electronics"
    },
    {
        imageUrl:chemicalImage,
        title:'Chemical Products',
        desc:'This is a Computer Electronic',
        linkToGo:"electronics"
    },
    {
        imageUrl:electronics,
        title:'Garments Accessories',
        desc:'This is a Computer Electronic',
        linkToGo:"electronics"
    },
    {
        imageUrl:electronics,
        title:'Digital LED Screens',
        desc:'This is a Computer Electronic',
        linkToGo:"electronics"
    },
  ];

export const products = [
    {
        name:'Digital Printing Devices',
        picture: printer
    },
    {
        name:'Computing Devices',
        picture: Computing_device
    },
    {
        name:'Banking Equipments',
        picture: Banking_Equipments
    },
    {
        name:'Smart Display System',
        picture: Digital_Boards
    },
    {
        name:'Office Equipments',
        picture: Office_Equipments
    },
    {
        name:'Medical Equipments',
        picture: Med_Equipments
    },
]

export const partner_logos = [
    asusLogo,DeliLogo,DELLLogo,HPLogo,maxellLogo,OKILogo
]

export const gallary_images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,
]

export const contact_info = [
    '📍 Farmview Super Market, Dhaka',
    '📞 Store: +8801641757175',
    '🚚 Delivery: +8801919646416',
    '📨 Info: +8801717062205'
]

export const social_media = [
    {
        links:"#",
        className: 'fa-facebook-f'
    },
    {
        link:"#",
        className: 'fa-youtube'
    },
    {
        link:"#",
        className: 'fa-twitter'
    },
    {
        link:"#",
        className: 'fa-instagram'
    },
]


export const mission = [
    {
        title: 'Mission',
        logo: missionIcon,
        desc: 'To help every customer have a positive memorable experience'
    },
    {
        title: 'Vision',
        logo: visionIcon,
        desc: 'To have a positive impact on the lives of our customers and our team'
    },
    {
        title: 'Our Value',
        logo: valueIcon,
        desc: 'To be open, honest and fair whatever we do, do it right and we do it together'
    }
]