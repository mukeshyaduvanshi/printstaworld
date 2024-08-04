"use client"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {data} from "@/data/BrowseAllCategories"
import Link from "next/link"

function BrowseAllCategories() {
  return (
    <>
    <Carousel className="w-full min-w-sm">
      <div className='text-center my-4 text-2xl font-semibold'>Browse All Categories</div>
  <CarouselContent>
    {data.map((item) =>(
      <CarouselItem key={data.id} className="pl-1 md:basis-1/3 lg:basis-1/6">
      <div className="p-1">
        <Card>
          <div className="flex items-center justify-center">
            <Link href={item.link}>
            <img className="bg-cover rounded-t-md" src={item.img} alt="" />
            </Link>
          </div >
          <p className="text-center p-3">{item.name}</p>
        </Card>
      </div>
    </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </>
  )
}

export default BrowseAllCategories
