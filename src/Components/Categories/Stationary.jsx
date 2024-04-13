import React from 'react'
import { Link } from 'react-router-dom'

function Stationary() {
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
    img:"/img/stationary/Letterhead.png",
    name:"Letterhead",
    price:"5.31",
    title:"each for 500 pieces",
    link:""
},
{
  id:3,
    img:"/img/stationary/Envelopes.png",
    name:"Envelopes",
    price:"5.31",
    title:"each for 500 pieces",
    link:""
},
{
  id:4,
    img:"/img/stationary/Stamp.png",
    name:"Stamp",
    price:"365",
    title:"for 1 Stamp",
    link:""
},
{
  id:5,
    img:"/img/stationary/BillBooks.png",
    name:"Bill Books",
    price:"322",
    title:"for 1 piece",
    link:""
},
{
  id:6,
    img:"/img/stationary/Standees.png",
    name:"Standees",
    price:"2761",
    title:"each for 1 pieces",
    link:""
},
{
  id:7,
    img:"/img/stationary/IdCards.png",
    name:"ID Cards",
    price:"106",
    title:"for 1 Card",
    link:""
},
{
  id:8,
    img:"/img/stationary/Lanyards.png",
    name:"Lanyards",
    price:"89",
    title:"each for 10 Lanyards",
    link:""
},
{
  id:9,
    img:"/img/stationary/Notebooks.png",
    name:"Notebooks",
    price:"118",
    title:"for 1 Notebook",
    link:""
},
{
  id:10,
    img:"/img/stationary/Diaries.png",
    name:"Diaries",
    price:"472",
    title:"for 1 Diary",
    link:""
},
{
  id:11,
    img:"/img/stationary/Notepads.png",
    name:"Notepads",
    price:"100",
    title:"for 1 Notepad",
    link:""
},
{
  id:12,
    img:"/img/stationary/DocumentPrinting.png",
    name:"Document Printing",
    price:"5.31",
    title:"for 1 Print",
    link:""
},
{
  id:13,
    img:"/img/stationary/Card.png",
    name:"Card",
    price:"4",
    title:"for 10 Cards",
    link:""
},
{
  id:14,
    img:"/img/stationary/Booklets.png",
    name:"Booklets",
    price:"66",
    title:"for 1 Booklet",
    link:""
},
{
  id:15,
    img:"/img/stationary/PresentationFolders.png",
    name:"Presentation Folders",
    price:"100",
    title:"each for 5 Folders",
    link:""
},
{
  id:16,
    img:"/img/stationary/Pens.png",
    name:"Pens",
    price:"241",
    title:"for 1 Pen",
    link:""
},
{
  id:17,
    img:"/img/stationary/Keychains.png",
    name:"Keychains",
    price:"123",
    title:"for 100 Keychain",
    link:""
},
]

export default Stationary