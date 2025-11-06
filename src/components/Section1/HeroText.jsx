import React from "react";

const HeroText = () => {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-6xl font-bold leading-[1.2]">
        The Real <br />{" "}
        <span className="bg-yellow-200 rounded-se-[45px] px-3 py-[0.6]">
          {" "}
          Brands..{" "}
        </span>{" "}
        <br /> To Collab With
      </h1>
      <p className="text-xl w-[90%] font-medium  text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur
        pariatur voluptatem natus, autem excepturi quisquam, officiis optio,
        doloribus cumque id corporis accusantium esse consequuntur?
      </p>
    </div>
  );
};

export default HeroText;
