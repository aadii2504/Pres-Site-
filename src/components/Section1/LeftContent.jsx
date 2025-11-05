import React from "react";
import { User } from "lucide-react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
      <div className="p-6">
        <h1 className="mb-6 text-6xl font-bold leading-[1.2]">
          The Real <br /> <span className="bg-yellow-200"> Brands.. </span> <br /> To Collab With
        </h1>
        <p className="text-xl font-medium  text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur
          pariatur voluptatem natus, autem excepturi quisquam, officiis optio,
          doloribus cumque id corporis accusantium esse consequuntur?
          
        </p>
      </div>
      <div className="text-7xl pb-6">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};



export default LeftContent;
