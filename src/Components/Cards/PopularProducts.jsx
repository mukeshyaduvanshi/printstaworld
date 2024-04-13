import React from 'react'

function PopularProducts() {
  return (
    <>
        <div className='text-center mt-10 mb-2 text-2xl font-semibold'>Popular Products</div>
    <div className='flex flex-wrap'>
        {data.map((item)=>(
        <div className='w-56 my-10 ml-2'>    
            <img src="./img/product/round-card.jpg" alt="" />
            <p className='text-center my-2'>{item.title}</p>
        </div>
        ))}
    </div>
    </>
  )
}

export const data = [
    {
        img:"",
        title:"Business Cards"
    },
    {
        img:"",
        title:"Apparel"
    },
    {
        img:"",
        title:"Corporate Gifts"
    },
    {
        img:"",
        title:"Drinkware"
    },
    {
        img:"",
        title:"Mailer Box"
    },
    {
        img:"",
        title:"Awards"
    },
    {
        img:"",
        title:"Stickers"
    },
    {
        img:"",
        title:"Name Plates"
    },
    {
        img:"",
        title:"Bagpacks"
    },
    {
        img:"",
        title:"Labels"
    },
    {
        img:"",
        title:"Courier Poly Bag"
    },
    {
        img:"",
        title:"Posters"
    },
]

export default PopularProducts