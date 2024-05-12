import React from 'react'
import { Link } from 'react-router-dom'

function Marketing() {
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
                <div className='w-[23%] m-3'>
              <Link to={item.link}>
              <img src={item.img} alt="" />
              <p className='text-center m-3 text-base font-semibold'>{item.name}</p>
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
    img:"/img/marketing/Standees.png",
    name:"Standees",
    price:"2761",
    title:"for 1 Qty",
    link:""
  },
  {
    id:2,
    img:"/img/marketing/Booklets.png",
    name:"Booklets",
    price:"95",
    title:"for 1 Qty",
    link:""
  },
  {
    id:3,
    img:"/img/marketing/Flyers.png",
    name:"Flyers",
    price:"149",
    title:"for 25 Qty",
    link:""
  },
  {
    id:4,
    img:"/img/marketing/Brochures.png",
    name:"Brochures",
    price:"346",
    title:"for 10 Qty",
    link:""
  },
  {
    id:5,
    img:"/img/marketing/SunboardPosters.png",
    name:"Sunboard Posters",
    price:"625",
    title:"for 1 Qty",
    link:""
  },
  {
    id:6,
    img:"/img/marketing/Banners.png",
    name:"Banners",
    price:"1003",
    title:"for 1 Qty",
    link:""
  },
  {
    id:7,
    img:"/img/marketing/FabricSignBoard.png",
    name:"Fabric Sign Board",
    price:"590",
    title:"for 1 Qty",
    link:""
  },
  {
    id:8,
    img:"/img/marketing/AcrylicSignBoard.png",
    name:"Acrylick Sign Board",
    price:"2596",
    title:"for 1 Qty",
    link:""
  },
  {
    id:9,
    img:"/img/marketing/NamePlate.png",
    name:"Name Plate",
    price:"1209",
    title:"for 1 Qty",
    link:""
  },
  {
    id:10,
    img:"/img/marketing/Posters.png",
    name:"Posters",
    price:"38",
    title:"for 1 Qty",
    link:""
  },
  {
    id:11,
    img:"/img/marketing/AcrylicDeskStands.png",
    name:"Acrylic Desk Stands",
    price:"116",
    title:"for 1 Qty",
    link:""
  },
  {
    id:12,
    img:"/img/marketing/TentCard.png",
    name:"Tent Card",
    price:"277",
    title:"for 10 Qty",
    link:""
  },
  {
    id:13,
    img:"/img/marketing/Cards.png",
    name:"Cards",
    price:"29",
    title:"for 10 Qty",
    link:""
  },
  {
    id:14,
    img:"/img/marketing/Decals.png",
    name:"Decals",
    price:"147",
    title:"for 1 Qty",
    link:""
  },
  {
    id:15,
    img:"/img/marketing/Dangler.png",
    name:"Dangler",
    price:"123",
    title:"for 5 Qty",
    link:""
  },
  {
    id:16,
    img:"/img/marketing/LEDFrames.png",
    name:"LED Frames",
    price:"2832",
    title:"for 1 Qty",
    link:""
  },
  {
    id:17,
    img:"/img/marketing/Canvas.png",
    name:"Canvas",
    price:"800",
    title:"for 1 Qty",
    link:""
  },
]

export default Marketing