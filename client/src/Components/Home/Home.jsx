import React from 'react'
import BrowserSlider from '../Sliders/BrowserSlider'
import Packaging from '../Sliders/Packaging'
import Stationery from '../Sliders/Stationery'
import SignMarkiting from '../Sliders/SignMarkiting'
import PopularProducts from '../Cards/PopularProducts'


function Home() {
  return (
    <>
    <div className='h-auto w-screen flex flex-wrap justify-center'>
    <div className='w-[1500px]'>
    <BrowserSlider/>
    <PopularProducts/>
    <Packaging/>
    <Stationery/>
    <SignMarkiting/>
    </div>
    </div>
    </>
  )
}

export default Home