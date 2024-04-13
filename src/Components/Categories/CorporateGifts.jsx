import React from 'react'
import { Link } from 'react-router-dom'

function CorporateGifts() {
  return (
    <>
    <div className='w-full flex justify-center my-10'>
      <div className='w-[1400px] '>
        <div className='w-full h-auto py-6'>
          <img src="/img/stationary/StationeryBannerHead.png" alt="" />
        </div>
        <h2 className='text-center text-5xl text-gray-700 font-semibold'>Business Essentials</h2>
        <p className='text-center text-gray-500 py-3 text-xl'>Branded stationery is a fantastic way to boost your marketing efforts</p>
        <div className='w-full mt-5'>
          <div className='flex flex-wrap w-full justify-start mt-5'>
            {
              data.map((item)=>(
                <div className='w-[18%] m-3'>
              <Link to={item.link}>
              <img src={item.img} alt="" />
              <p className='text-center m-3 text-base'>{item.name}</p>
              <p className='text-center m-3 pb-3'><span className=''>&#x20b9;{item.price}</span> <span className='text-sm'>{item.title}</span></p>
              </Link>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export const data = [
    {
      id:1,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:2,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:3,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:4,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:5,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:6,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:7,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:8,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:9,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:10,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:11,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:12,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:13,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:14,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:15,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:16,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:17,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:18,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:19,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
    {
      id:20,
        img:"/img/stationary/BusinessCard.png",
        name:"Business Cards",
        price:"1.89",
        title:"each for 100 pieces",
        link:""
    },
]

export default CorporateGifts