import React from 'react'
import BrowserSlider from '../Sliders/BrowserSlider'
// import Packaging from '../Sliders/Packaging'
// import Stationery from '../Sliders/Stationery'
import PopularProducts from '../Cards/PopularProducts'
import Cards from '../Cards/Cards'
// import SignsMarketing from '../Sliders/SignsMarketing'


function Home() {
  return (
    <>
    <div className='h-auto w-screen flex flex-wrap justify-center'>
    <div className='w-[1400px]'>
    <BrowserSlider/>
    <PopularProducts/>
    <Cards/>
    {/* <Packaging/> */}
    {/* <Stationery/> */}
    {/* <SignsMarketing/> */}
    </div>
    </div>
    </>
  )
}

export default Home