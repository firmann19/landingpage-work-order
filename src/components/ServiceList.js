import React from "react";
import ServiceItem from "./ServiceItem";
import ImgHardware from '../assets/image/hardware.png'
import ImgSoftware from '../assets/image/software.png'

function ServiceList(props) {
  return (
    <div className=" px-6 items-center p-8 bg-slate-300">
      <h1 className="text-4xl font-bold text-center">Service</h1>
      <p className="font-semibold text-center my-6">
        Providing various repair services about information technology
      </p>
      <div className="flex gap-18 mx-20 py-5 justify-evenly">
         <ServiceItem 
           img={ImgHardware}
           select="Hardware"
           title="Hardware"
         />
         <ServiceItem 
           img={ImgSoftware}
           title="Software"
           select="Software"
         />
      </div>
    </div>
  );
}

export default ServiceList;