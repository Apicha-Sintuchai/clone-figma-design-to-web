/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Profile = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[80%]">
        <div className="mt-10 flex  items-center flex-col  justify-between sm:flex-row ">
          <div className="font-bold text-4xl">
            <p className="">
              Hi, I am John
              <p>Creative Technologist</p>
            </p>
          </div>
          <img
            className="rounded-full border w-1/2  lg:w-60 "
            src="https://i.pinimg.com/236x/2f/95/2b/2f952bc759fb91f9aa214d53d3c03624.jpg"
            alt=""
          />
        </div>
        <div className="w-96">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className=" flex mt-6 justify-center items-center sm:justify-start">
        <p className=" bg-red-300  ">Download Resume</p>
        </div>
        </div>
      </div>
    </>
  );
};
