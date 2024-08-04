import React from 'react'
import { Link } from 'react-router-dom'

function PopularProducts() {
  return (
    <>
        <div className='text-center mt-10 mb-2 text-2xl font-semibold'>Popular Products</div>
    <div className='flex flex-wrap'>
        {data.map((item)=>(
        <div className='w-56 my-10 ml-2'>
            <Link to={item.link}>
            <img src={item.img} alt="" />
            <p className='text-center my-2'>{item.title}</p>
            </Link>
        </div>
        ))}
    </div>
    </>
  )
}

export const data = [
    {
        id:1,
        img:"/img/PopularProducts/BusinessCards.png",
        title:"Business Cards",
        link:"/categories/business-card"
    },
    {
        id:2,
        img:"/img/PopularProducts/Apparel.png",
        title:"Apparel",
        link:"/categories/apparel"
    },
    {
        id:3,
        img:"/img/PopularProducts/CorporateGifts.png",
        title:"Corporate Gifts",
        link:"/categories/corporate-gifts"
    },
    {
        id:4,
        img:"/img/PopularProducts/Drinkware.png",
        title:"Drinkware",
        link:"/categories/drinkware"
    },
    {
        id:5,
        img:"/img/PopularProducts/MailerBoxes.png",
        title:"Mailer Boxes",
        link:"/categories/mailer-boxes"
    },
    {
        id:6,
        img:"/img/PopularProducts/Awards.png",
        title:"Awards",
        link:"/categories/awards"
    },
    {
        id:7,
        img:"/img/PopularProducts/Stickers.png",
        title:"Stickers",
        link:"/categories/stickers"
    },
    {
        id:8,
        img:"/img/PopularProducts/NamePlates.png",
        title:"Name Plates",
        link:"/categories/name-plates"
    },
    {
        id:9,
        img:"/img/PopularProducts/Backpacks.png",
        title:"Backpacks",
        link:"/categories/backpacks"
    },
    {
        id:10,
        img:"/img/PopularProducts/Labels.png",
        title:"Labels",
        link:"/categories/labels"
    },
    {
        id:11,
        img:"/img/PopularProducts/CourierPloyBag.png",
        title:"Courier Ploy Bag",
        link:"/categories/courier-poly-bag"
    },
    {   
        id:12,
        img:"/img/PopularProducts/Posters.png",
        title:"Posters",
        link:"/categories/posters"
    },
]

export default PopularProducts