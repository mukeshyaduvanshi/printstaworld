"use client"
import React from 'react'
import {Menu} from "lucide-react"
import Link from 'next/link'

function SideNav() {

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




  return (
    <>
    <main className='border border-solid border-black w-full h-screen'>
    <div id="mySidenav" class="sidenav">
  <Link href="javascript:void(0)" class="closebtn" onclick={closeNav()}>&times;</Link>
  <Link href="#">Business Cards</Link>
  <Link href="#">Calendars</Link>
  <Link href="#">Packaging</Link>
  <Link href="#">Photo Gifts</Link>
  <Link href="#">Rewards</Link>
  <Link href="#">Decorate</Link>
  <Link href="#">Stationery</Link>
  <Link href="#">Corporate Gift</Link>
  
</div>

<span onclick={openNav()}>open</span>

<div id="main">
    ...
</div>
    </main>
    </>
  )
}

export default SideNav