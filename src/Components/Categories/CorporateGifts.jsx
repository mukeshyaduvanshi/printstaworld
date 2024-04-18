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
        img:"/img/corporateGifts/EmployeeJoiningKits.png",
        name:"Employee Joining Kits",
        price:"411",
        title:"for 1 Kit",
        link:""
    },
    {
      id:2,
        img:"/img/corporateGifts/EmployeeEngagementKit.png",
        name:"Employee Engagement Kit",
        price:"590",
        title:"for 1 Kit",
        link:""
    },
    {
      id:3,
        img:"/img/corporateGifts/FestiveGiftHampers.png",
        name:"Festive Gift Hampers",
        price:"383",
        title:"for 1 Kit",
        link:""
    },
    {
      id:4,
        img:"/img/corporateGifts/Backpacks.png",
        name:"Backpacks",
        price:"686",
        title:"for 1 Bagpack",
        link:""
    },
    {
      id:5,
        img:"/img/corporateGifts/Drinkware.png",
        name:"Drinkware",
        price:"470",
        title:"for 1 Bottle",
        link:""
    },
    {
      id:6,
        img:"/img/corporateGifts/AwardsTrophies.png",
        name:"Awards & Trophies",
        price:"920",
        title:"for 1 Awards",
        link:""
    },
    {
      id:7,
        img:"/img/corporateGifts/Medals.png",
        name:"Medals",
        price:"179",
        title:"for 1 Medals",
        link:""
    },
    {
      id:8,
        img:"/img/corporateGifts/Calendars.png",
        name:"Calendars",
        price:"329",
        title:"for 1 Calender",
        link:""
    },
    {
      id:9,
        img:"/img/corporateGifts/DesktopItems.png",
        name:"Desktop Items",
        price:"548.70",
        title:"for 1 Piece",
        link:""
    },
    {
      id:10,
        img:"/img/corporateGifts/Diaries.png",
        name:"Diaries",
        price:"472",
        title:"for 1 Diaries",
        link:""
    },
    {
      id:11,
        img:"/img/corporateGifts/LaptopSleeves.png",
        name:"Laptop Sleeves",
        price:"1020",
        title:"for 1 Sleeves",
        link:""
    },
    {
      id:12,
        img:"/img/corporateGifts/Certificate.png",
        name:"Certificate",
        price:"37",
        title:"for 1 Certificate",
        link:""
    },
    {
      id:13,
        img:"/img/corporateGifts/EngravedPens.png",
        name:"Engraved Pens",
        price:"241",
        title:"for 1 Pen",
        link:""
    },
    {
      id:14,
        img:"/img/corporateGifts/Keychains.png",
        name:"Keychains",
        price:"123",
        title:"for 1 Keychain",
        link:""
    },
    {
      id:15,
        img:"/img/corporateGifts/Caps.png",
        name:"Caps",
        price:"196",
        title:"for 50 Caps",
        link:""
    },
    {
      id:16,
        img:"/img/corporateGifts/T-Shirts.png",
        name:"T-Shirts",
        price:"410",
        title:"for 1 T-Shirt",
        link:""
    },
    {
      id:17,
        img:"/img/corporateGifts/Notebooks.png",
        name:"Notebooks",
        price:"129",
        title:"for 1 Notebook",
        link:""
    },
    {
      id:18,
        img:"/img/corporateGifts/Mugs.png",
        name:"Mugs",
        price:"302",
        title:"for 1 Mug",
        link:""
    },
    {
      id:19,
        img:"/img/corporateGifts/Mousepad.png",
        name:"Mousepad",
        price:"234",
        title:"for 1 Mousepad",
        link:""
    },
    {
      id:20,
        img:"/img/corporateGifts/LuggagesTags.png",
        name:"Luggages Tags",
        price:"200",
        title:"for 1 Tag",
        link:""
    },
]

export default CorporateGifts