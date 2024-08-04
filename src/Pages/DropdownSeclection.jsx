import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DropdownSeclection() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item)=>(
            <SelectItem value={item.id}>{item.value}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

// const data = [
//   {
//     id:1,
//     value:"Matte Coated Paper"
//   },
//   {
//     id:2,
//     value:"Glossy Cotted Paper"
//   },
// ]
