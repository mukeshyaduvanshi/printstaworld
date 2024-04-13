import React from 'react'
import { Link } from 'react-router-dom'

function BusinessCard() {
  return (
    <>
    <div className='w-full flex justify-center my-10'>
      <div className='w-[1400px] '>
        <div className='w-full h-auto py-6'>
          <img src="/img/businessCard/businessCardHead.png" alt="" />
        </div>
        <p className='text-center'>Want to create a perfect first impression with your clients?</p>
        <div className='flex justify-center'>
        <button className='bg-[#4a156b] hover:bg-[#38174d] p-2 rounded-md text-white m-2'>Browse Designs</button>
        </div>
        <div className='w-full mt-5'>
          <p className='text-4xl font-semibold text-[#333]'>Most Popular Business Cards</p>
          <div className='flex flex-wrap w-full justify-start mt-5'>
            {
              data1.map((item)=>(
                <div className='w-[23%] m-3 hover:shadow-lg shadow-gray-300 duration-100 rounded-md hover:rounded-md border-[0.2px] border-gray-200 border-solid hover:border-none'>
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
        <div className='w-full mt-5'>
          <p className='text-4xl font-semibold text-[#333]'>Premium Business Cards</p>
          <div className='flex flex-wrap w-full justify-start mt-5'>
            {
              data2.map((item)=>(
                <div className='w-[23%] m-3 hover:shadow-lg shadow-gray-300 duration-100 rounded-md hover:rounded-md border-[0.2px] border-gray-200 border-solid hover:border-none'>
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
        <div className='w-full mt-5'>
          <p className='text-4xl font-semibold text-[#333]'>Shop Visiting Cards By Shape</p>
          <div className='flex flex-wrap w-full justify-start mt-5'>
            {
              data3.map((item)=>(
                <div className='w-[23%] m-3 hover:shadow-lg shadow-gray-300 duration-100 rounded-md hover:rounded-md border-[0.2px] border-gray-200 border-solid hover:border-none'>
            <Link to={item.link}>
              <img src={item.img} alt="" />
              <p className='text-center m-3 text-base'>{item.name}</p>
              <p className='text-center m-3 pb-3'><span className=''>&#x20b9;{item.price} </span><span className='text-sm'>{item.title}</span></p>
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

export const data1 = [
  {
    id:1,
    img:"/img/businessCard/MostPopularBusinessCards/01standardBusinessCard.png",
    name:"Standard Business Card",
    price:"2.01",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:2,
    img:"/img/businessCard/MostPopularBusinessCards/02premiumLaminatedCards.png",
    name:"Premium Laminated Cards",
    price:"4.60",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:3,
    img:"/img/businessCard/MostPopularBusinessCards/03texturedBusinessCard.png",
    name:"Textured Business Card",
    price:"4.60",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:4,
    img:"/img/businessCard/MostPopularBusinessCards/04squareBusinessCard.png",
    name:"Square Business Card",
    price:"2.12",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:5,
    img:"/img/businessCard/MostPopularBusinessCards/05roundedCornerBusinessCard.png",
    name:"Rounded Corner Business Card",
    price:"2.95",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:6,
    img:"/img/businessCard/MostPopularBusinessCards/06metallicBusinessCard.png",
    name:"Metallic Business Card",
    price:"5.61",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:7,
    img:"/img/businessCard/MostPopularBusinessCards/07circleBusinessCard.png",
    name:"Circle Business Card",
    price:"2.60",
    title:"each for 100 pieces",
    link:""
  },
]
export const data2 = [
  {
    id:1,
    img:"/img/businessCard/PremiumBusinessCards/01spotUVBusinessCard.png",
    name:"Spot UV Business Card",
    price:"10.03",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:2,
    img:"/img/businessCard/PremiumBusinessCards/02ecoFriendlyBusinessCard.png",
    name:"Eco Friendly Business Card",
    price:"4.37",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:3,
    img:"/img/businessCard/PremiumBusinessCards/03sandwichBusinessCard.png",
    name:"Sandwich Business Card",
    price:"9.32",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:4,
    img:"/img/businessCard/PremiumBusinessCards/04translucentBusinessCard.png",
    name:"Translucent Business Card",
    price:"4.60",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:5,
    img:"/img/businessCard/PremiumBusinessCards/05metallicBusinessCard.png",
    name:"Metallic Business Card",
    price:"5.61",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:6,
    img:"/img/businessCard/PremiumBusinessCards/06nonTearableBusinessCard.png",
    name:"Non Tearable Business Card",
    price:"4.90",
    title:"each for 100 pieces",
    link:""
  },
]
export const data3 = [
  {
    id:1,
    img:"/img/businessCard/ShopVisitingCardsByShape/01rectangleBusinessCard.png",
    name:"Rectangle Business Card",
    price:"2.01",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:2,
    img:"/img/businessCard/ShopVisitingCardsByShape/02roundedCornerBusinessCard.png",
    name:"Rounded Corner Business Card",
    price:"2.95",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:3,
    img:"/img/businessCard/ShopVisitingCardsByShape/03squareBusinessCard.png",
    name:"Square Business Card",
    price:"2.12",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:4,
    img:"/img/businessCard/ShopVisitingCardsByShape/04circleBusinessCard.png",
    name:"Circle Business Card",
    price:"2.60",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:5,
    img:"/img/businessCard/ShopVisitingCardsByShape/05customShapeBusinessCard.png",
    name:"Custom Shape Business Card",
    price:"15.34",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:6,
    img:"/img/businessCard/ShopVisitingCardsByShape/06uShapeBusinessCard.png",
    name:"U Shape Business Card",
    price:"2.60",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:7,
    img:"/img/businessCard/ShopVisitingCardsByShape/07miniBusinessCard.png",
    name:"Mini Business Card",
    price:"1.77",
    title:"each for 100 pieces",
    link:""
  },
  {
    id:8,
    img:"/img/businessCard/ShopVisitingCardsByShape/08ovalBusinessCard.png",
    name:"Oval Business Card",
    price:"2.60",
    title:"each for 100 pieces",
    link:""
  },
]

export default BusinessCard