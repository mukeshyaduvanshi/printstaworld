"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function page() {
    const [selects,setSelects] = useState("");
  console.log(selects);
  const getSelectValue = (e)=>{
      setSelects(e.target.value)
    }
    // console.log(getSelectValue);
  return (
    <>
    <div className=" p-3">
            <div className="px-5 flex items-center">
              <span className="font-medium">Lamination</span>
              <Select
              value={selects}
              onChange={getSelectValue}
              >
                <SelectTrigger className="ml-auto w-96">
                  <SelectValue
                    placeholder="Matte Coated Paper"
                    
                  />
                </SelectTrigger>
                <SelectContent className="bg-white p-0">
                  <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <p>
                {selects}
            </p>
          </div>
    </>
  )
}

export default page