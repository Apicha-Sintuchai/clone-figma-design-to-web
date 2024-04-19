/* eslint-disable @next/next/no-img-element */
import React from "react";

export const FutureWork = () => {
  return (
    <>
    <div className="flex  justify-center items-center  ">
      <div className="w-[80%]">
        <p>Featured works</p>
        <div className="flex flex-col gap-y-5">
       <div className="flex gap-10 h-[250px]">
        <img src="https://i.pinimg.com/236x/9b/7f/f7/9b7ff7bae3f5ac47565db75c13a322e4.jpg" alt="" className="object-cover object-top"/>
        <p className="text-2xl font-heebo ">Designing Dashboards
          <p className=" mt-8 h-[190px] overflow-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </p>
       </div>
       <div className="flex gap-10">
       <img src="https://i.pinimg.com/236x/d1/bf/bd/d1bfbd51d3252b4e08fe9142461c5b17.jpg" alt="" className="object-cover object-top"/>
        <p className="text-2xl font-heebo ">Vibrant Portraits of 2020
          <p className=" mt-8  h-[190px] overflow-auto ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </p>
       </div>
       <div className="flex gap-10 ">
       <img src="https://i.pinimg.com/236x/a0/6c/bf/a06cbf5cf577e351a89ff90bc078657b.jpg" alt="" className="object-cover object-top"/>
        <p className="text-2xl font-heebo ">36 Days of Malayalam type
          <p className=" mt-8  h-[190px] overflow-auto ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </p>
       </div>
       </div>
      </div>
    </div>
    </>
  );
};
