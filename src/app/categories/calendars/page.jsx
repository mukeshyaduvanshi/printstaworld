"use client"
import React from 'react'
import { calendars } from "@/data/allProductdata"
import Link from 'next/link'

function page() {
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
              calendars.map((item)=>(
                <div className='w-[23%] m-3'>
              <Link href={item.link}>
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

export default page