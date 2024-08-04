import React, { useState } from "react";

function Dropdown({selected,setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React","Vue"]
  return (
    <>
      <div className=" relative inline-block">
        <div
          className="shadow-md shadow-gray-200 rounded-sm w-80 h-10 flex items-center p-3 cursor-pointer"
          onClick={(e) => setIsActive(!isActive)}
        >
          {selected}
        </div>
        {isActive && (
          <div className="w-80 shadow-md shadow-gray-200 rounded-sm h-auto absolute bg-white cursor-pointer"
          >
            {options.map((item)=>(
              <div
              className="p-3 hover:bg-gray-200"
              onClick={(e)=>{
                setSelected(item)
                setIsActive(false)
              }}>
                {item}
              </div>
            ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
