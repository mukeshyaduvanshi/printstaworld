"use client"
import { MessageCircleMore, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'



function Header() {
  return (
    <>
   <header className='sticky top-0 z-20 bg-white'>
   <div className="flex bg-[#E1E1E1] justify-between items-center uppercase">
          <div className="ml-10">
            <p>Free Shipping for all orders of &#x20b9;999</p>
          </div>
          <div className="mr-10">
            <button className="bg-[#842C83] p-3 text-white uppercase">
              Business solution
            </button>
          </div>
        </div>
        <div className="flex h-16 justify-between px-5  ml-auto mr-auto">
          <div className="flex items-center">
            <Link href='/'>
            <img
              className="w-14 h-14 mr-4"
              src="https://printstaworld.netlify.app/img/icons/printstaworld-logo.png"
              alt=""
              />
              </Link>
          </div>
          <div className="flex items-center">
            <button className="flex items-center m-4">
              {/* <img className="w-6 h-6 m-2" src="/img/icons/chat.png" alt="" /> */}
              <MessageCircleMore/>
              <p>Help Center</p>
            </button>
            <button className="flex items-center m-4">
              {/* <img className="w-6 h-6 m-2" src="/img/icons/user.png" alt="" /> */}
              <User/>
              <p>Login/Signup</p>
            </button>
            <button className="flex m-4">
              {/* <img className="w-6 h-6" src="/img/icons/cart.png" alt="" /> */}
              <ShoppingCart/>
            </button>
          </div>
        </div>
        <div className="flex h-10 justify-center w-full bg-[#842C83]">
          <nav className="flex text-white w-[1500px]">
            <ul className="flex w-full justify-evenly items-center">
              <Link href="/"  className="hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Calendars
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Packaging
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Photo Gifts
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
              Same Day Delivery
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Rewards
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Decorate
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Stationery
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Sign & Markiting
              </Link>
              <Link  href="/" className=" hover:text-orange-500 cursor-pointer md:px-2  max-md:text-sm">
                Corporate Gifts
              </Link>
            </ul>
          </nav>
        </div>
   </header>
    </>
  )
}

export default Header