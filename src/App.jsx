import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const brands = [
    { img: "https://images.unsplash.com/photo-1644785493997-fed9986e10ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600", intro: "", tag: "Start Here" },
    { img: "https://images.unsplash.com/photo-1680986070892-1b64bfe03338?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=733", intro: "", tag: "With Real" },
    { img: "https://images.unsplash.com/photo-1672056121447-578c687eb6d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", intro: "", tag: "UGC Brands" },
  ];
  return (
    <div>
      <Section1  brands={brands}/>
      <Section2 />
    </div>
  );
};

export default App;
