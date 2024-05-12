import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"20px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"20px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer",
       }}
      onClick={onClick}
    />
  );
}

function BrowserSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
   <>
   <div className='text-center mt-10 mb-2 text-2xl font-semibold'>Browse All Categories</div>
   <div className='w-full m-auto'>
    <div>
   <Slider {...settings}>
    {productData.map((item)=>(
      <div className='bg-white my-5 w-40 rounded-xl'>
        <Link to={item.url}>
        <div className='m-2 mb-0 flex justify-center items-center'>
        <img className='w-full h-52' src={item.img} alt="" />
        </div>
        <p className='text-center p-3'>{item.name}</p>
      </Link>
      </div>
    ))}
    </Slider>
    </div>
   </div>
   </>
  )
}

export default BrowserSlider

export const productData = [
  {
    id:1,
    img:"./img/product/round-card.jpg",
    name:"Business Cards",
    url:"/categories/business-card"
    
  },
  {
    id:2,
    img:"./img/product/stationary.jpg",
    name:"Stationary",
    url:"/categories/stationary"
  },
  {
    id:3,
    img:"./img/product/gift.jpg",
    name:"Corporate Gifts",
    url:"/categories/corporate-gifts"
  },
  {
    id:4,
    img:"./img/product/gift.jpg",
    name:"Photo Gifts",
    url:"/categories/photo-gifts"
  },
  {
    id:5,
    img:"./img/product/calender.jpg",
    name:"Calendars",
    url:"/categories/calendars"
  },
  {
    id:6,
    img:"./img/product/packing.jpg",
    name:"Marketing",
    url:"/categories/marketing"
  },
  {
    id:7,
    img:"./img/product/packing.jpg",
    name:"Drinkware",
    url:"/categories/drinkware"
  },
  {
    id:8,
    img:"./img/product/packing.jpg",
    name:"Packing",
    url:"/categories/packing"
  },
  {
    id:9,
    img:"./img/product/Awards.png",
    name:"Awards",
    url:"/categories/awards"
  },
]