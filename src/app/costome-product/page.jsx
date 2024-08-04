"use client";
import React, { useState,useRef } from "react";
import { DropdownSeclection } from "@/Pages/DropdownSeclection";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"
import {materials,lamination,orientation,printingLocation,quantity,} from "@/data/costomeProductData"
import { Label } from "@/components/ui/label";
import { UploadIcon } from "lucide-react";

function page() {

  const [value,setValue] = useState("")

  let ref = useRef("")
  function material(event){
    setValue(event.target.value)
  }
  console.log(value);
  
  return (
    <>
      <div className="w-full h-auto p-3 flex px-20">
        <div className="w-[50%]">
          <div className="flex justify-center">
            <img
              className="w-[35rem] h-[25rem] m-4"
              src="/img/businessCard/MostPopularBusinessCards/01standardBusinessCard.png"
              alt=""
            />
          </div>
          <div className="flex p-2 justify-center">
            <img
              className="w-[20%] h-28 m-2"
              src="/img/businessCard/MostPopularBusinessCards/01standardBusinessCard.png"
              alt=""
            />
            <img
              className="w-[20%] h-28 m-2"
              src="/img/businessCard/MostPopularBusinessCards/01standardBusinessCard.png"
              alt=""
            />
            <img
              className="w-[20%] h-28 m-2"
              src="/img/businessCard/MostPopularBusinessCards/01standardBusinessCard.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[50%] p-3 h-auto border border-solid border-black">
          <div className="">
            <h3 className="text-3xl font-bold p-3 text-gray-700 oswald-700">
              Standard Business Card
            </h3>
            <ul className="list-disc mx-10 ">
              <li>
                People looking for a simple and affordable business card have
                the option of a standard material business card.
              </li>
              <li>Standard Material business cards measure3.5 x 2 inches</li>
              <li>Available in glossy and matte laminations</li>
            </ul>
            <p className="p-4 oswald-500 text-gray-600">
              same-Day Delivery for orders placed before 3 pm.
            </p>
          </div>
          <div className=" p-3">
            <div className="px-5 flex items-center">
              <span className="font-medium">Materials</span>
              <Select>
                <SelectTrigger className="ml-auto w-96">
                  <SelectValue
                    placeholder="Matte Coated Paper"
                    onChange={material}
                  />
                </SelectTrigger>
                <SelectContent className="bg-white p-0">
                  <SelectGroup>
                    {materials.map((item) => (
                      <SelectItem value={item.id}>{item.value}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" p-3">
            <div className="px-5 flex items-center">
              <span className="font-medium">Lamination</span>
              <Select>
                <SelectTrigger className="ml-auto w-96">
                  <SelectValue
                    placeholder="Matte Coated Paper"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white p-0">
                  <SelectGroup>
                    {lamination.map((item) => (
                      <SelectItem value={item.id}>{item.value}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" p-3">
            <div className="px-5 flex items-center">
              <span className="font-medium" >Orientation</span>
              <Select>
                <SelectTrigger className="ml-auto w-96">
                  <SelectValue
                    placeholder="LandScape"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white p-0">
                  <SelectGroup>
                    {orientation.map((item) => (
                      <SelectItem value={item.id}>{item.value}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className=" p-3">
            <div className="px-5 flex items-center">
              <span className="font-medium">Printing Location</span>
              <Select>
                <div className="border border-solid border-gray-300 rounded-md p-2 w-96 ml-auto">
                <Checkbox checked/><Label className="px-3">Front</Label>
                <Checkbox/><Label className="px-3">Back</Label>
                </div>
              </Select>
            </div>
          </div>
          <div className=" p-3">
            <div className="px-5 flex items-center">
              <span className="font-medium">Quantity</span>
              <Select className="bg-white ">
                <SelectTrigger className="ml-auto w-96">
                  <SelectValue
                    placeholder="100"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white p-0">
                  <SelectGroup>
                    {quantity.map((item) => (
                      <SelectItem value={item.id}>{item.value}
                      {/* <span className="mx-2 py-0 px-2 my-2 rounded-xl text-green-700">{item.tags}</span> */}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center p-5 border border-solid border-black">
            <div>
              <p><span>&#x20b9;</span><span>202.96</span>
              <span>inclusive of all taxes</span>
              </p>
              <p>for 100 Qty(&#x20b9;<span>2.03</span>/piece)</p>
            </div>
            <div>
              <button className="border border-solid border-black flex"><UploadIcon/> Upload your Files</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

