import React from 'react'
import { Link } from 'react-router-dom'

function Calendars() {
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
              <p className='text-center text-sm m-2 text-gray-500'>{item.title1}</p>
              <p className='text-center m-3 pb-3 text-xl text-gray-500'><span>{item.title2}</span> <span>&#x20b9;{item.price}</span></p>
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
      img:"/img/calendars/A5LandscapeCalendar.png",
      name:"A5 Landscape Calendar",
      price:"135",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:2,
      img:"/img/calendars/A5PortraitCalendar.png",
      name:"A5 Portrait Calendar",
      price:"135",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:3,
      img:"/img/calendars/BigSquareCalendar.png",
      name:"Big Square Calendar",
      price:"224",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:4,
      img:"/img/calendars/WallCalendar.png",
      name:"Wall Calendar",
      price:"224",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:5,
      img:"/img/calendars/LongCalendar.png",
      name:"Long Calendar",
      price:"128",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:6,
      img:"/img/calendars/MiniWoodenCalendar.png",
      name:"Mini Wooden Calendar",
      price:"141",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:7,
      img:"/img/calendars/CalendarWithPhoto.png",
      name:"Calendar With Photo",
      price:"171",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
  {
    id:8,
      img:"/img/calendars/FrameCalendars.png",
      name:"Frame Calendars",
      price:"199",
      title1:"Printing on Premium Paper",
      title2:"as low as",
      link:""
  },
]

export default Calendars