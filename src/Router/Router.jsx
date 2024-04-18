import React from 'react'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Root from '../Root'
import Home from '../Components/Home/Home'
import BusinessCard from '../Components/Categories/BusinessCard'
import Stationary from '../Components/Categories/Stationary'
import CorporateGifts from '../Components/Categories/CorporateGifts'
import PhotoGifts from '../Components/Categories/PhotoGifts'
import Calendars from '../Components/Categories/Calendars'
import Marketing from '../Components/Categories/Marketing'
import Drinkware from '../Components/Categories/Drinkware'
import Packing from '../Components/Categories/Packing'
import Awards from '../Components/Categories/Awards'



function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/categories/business-card' element={<BusinessCard/>} />
                <Route path='/categories/stationary' element={<Stationary/>} />
                <Route path='/categories/corporate-gifts' element={<CorporateGifts/>} />
                <Route path='/categories/photo-gifts' element={<PhotoGifts/>} />
                <Route path='/categories/calendars' element={<Calendars/>}/>
                <Route path='/categories/marketing' element={<Marketing/>} />
                <Route path='/categories/drinkware' element={<Drinkware/>} />
                <Route path='/categories/packing' element={<Packing/>} />
                <Route path='/categories/awards' element={<Awards/>} />
            </Route>
        )
    )
  return (
<>
<RouterProvider router={router}/>
</>    
  )
}

export  {Router}