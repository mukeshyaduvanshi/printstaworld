import React from 'react'
import { Link } from 'react-router-dom'

function PhotoGifts() {
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
              <p className='text-center m-3 text-xl font-semibold'>{item.name}</p>
              <p className='text-center m-3 pb-3 text-md text-gray-600'><span className=''>&#x20b9;{item.price}</span> <span className=''>{item.title}</span></p>
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
    img:"/img/photoGifts/PhotoWithWoodenStand.png",
    name:"Photo With Woodan Stand",
    price:"649",
    title:"for 1 Wooden Stand",
    link:""
  },
  {
    id:2,
    img:"/img/photoGifts/PhotoFrames.png",
    name:"Photo Frames",
    price:"348",
    title:"for 1 Frame",
    link:""
  },
  {
    id:3,
    img:"/img/photoGifts/AcrylicPhotoPrints.png",
    name:"Acrylic Photo Prints",
    price:"383",
    title:"for 1 Acrylic print",
    link:""
  },
  {
    id:4,
    img:"/img/photoGifts/PhotoPrints.png",
    name:"Photo Prints",
    price:"12.39",
    title:"each for 15 Prints",
    link:""
  },
  {
    id:5,
    img:"/img/photoGifts/PhotoBooks.png",
    name:"Photo Books",
    price:"782",
    title:"for 1 Book",
    link:""
  },
  {
    id:6,
    img:"/img/photoGifts/CanvasPrints.png",
    name:"Canvas Prints",
    price:"728",
    title:"for 1 wrap",
    link:""
  },
  {
    id:7,
    img:"/img/photoGifts/PhotoMugs.png",
    name:"Photo Mugs",
    price:"302",
    title:"for 1 Mug",
    link:""
  },
  {
    id:8,
    img:"/img/photoGifts/LEDPhotoFrames.png",
    name:"LED Photo Frames",
    price:"2832",
    title:"for 1 frame",
    link:""
  },
  {
    id:9,
    img:"/img/photoGifts/FridgeMagnets.png",
    name:"Fridge Magnets",
    price:"392",
    title:"for 1 Magnet",
    link:""
  },
]

export default PhotoGifts