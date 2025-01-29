import HeroBanner from "@/components/common/Banner";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import ProductCarousel from "@/components/home/ourProduct/ProductCarousel";
import React from "react";

function NewArrival() {
  return (
    <>
     {/* <RouteNavSlider router='New Arrival'/> */}
     <HeroBanner name='New Arrival' />
      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      
    </>
  );
}

export default NewArrival;
