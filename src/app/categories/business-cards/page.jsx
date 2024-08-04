import React from 'react'
import {mostPopularBusinessCards,premiumBusinessCards,shopVisitingCardsByShape} from "@/data/allProductdata"
import Link from 'next/link'

function page() {
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
              mostPopularBusinessCards.map((item)=>(
                <div
                className='w-[23%] m-3 hover:shadow-lg shadow-gray-300 duration-100 rounded-md hover:rounded-md border-[0.2px] border-gray-200 border-solid hover:border-none'>
              <Link href={item.link}>
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
              premiumBusinessCards.map((item)=>(
                <div className='w-[23%] m-3 hover:shadow-lg shadow-gray-300 duration-100 rounded-md hover:rounded-md border-[0.2px] border-gray-200 border-solid hover:border-none'>
              <Link href={item.link}>
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
              shopVisitingCardsByShape.map((item)=>(
                <div className='w-[23%] m-3 hover:shadow-lg shadow-gray-300 duration-100 rounded-md hover:rounded-md border-[0.2px] border-gray-200 border-solid hover:border-none'>
            <Link href={item.link}>
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

export default page