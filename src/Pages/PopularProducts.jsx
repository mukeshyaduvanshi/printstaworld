"use client"
import {data} from "@/data/PopularProducts"
import {Card} from "@/components/ui/card"
import Link from "next/link"

function PopularProducts() {
  return (
 <>
 <div className='text-center mt-10 mb-2 text-2xl font-semibold'>Popular Products</div>
 <div className="w-full flex flex-wrap m-5 justify-between max-sm:items-center">
    {data.map((item)=>(
        <Card className="my-1 mx-3">
    <Link href={item.link}>
    <img src={item.img} className="w-48 max-sm:w-full" alt="" />
    <p className="text-center p-3 bg-cover">{item.title}</p>
    </Link>
</Card>
))}
 </div>
 </>
  )
}

export default PopularProducts