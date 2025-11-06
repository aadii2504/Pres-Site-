import React from "react";

const RightCardContent = (props) => {
    console.log(props)
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6  flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold ">
        {props.order + 1}
      </h2> 
      <div>
        <p className="text-lg font-semibold text-white mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deserunt laboriosam quod!{" "}
        </p>
        <div className="flex justify-between">
          <button className=" text-white font-medium px-8 py-2 bg-gray-900 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:border border-gray-100">
            {props.tag}
          </button>
          <button className=" text-white font-medium px-4 py-2  bg-gray-900 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <i className="ri-arrow-up-circle-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
