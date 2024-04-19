import React from "react";

export const RecentWork = () => {
  return (
    <>
      <div className="flex justify-center bg-[#EDF7FA] p-5 h-full">
        <div className="w-[80%]">
          <div className="flex justify-center items-center w-full mt-4 ">
            <div className="flex justify-between w-[80%]">
              <p>Recent WOrk</p>
              <p>View All</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-16  justify-between sm:grid-cols-2">
            <div className=" bg-white font-heebo ">
              <p className="text-[26px]  font-bold">Making a design system from scratch</p>
              <p className=" mt-5">12 Feb 2020 |  Design,Patten</p>
              <p className=" mt-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className=" bg-white font-heebo">
            <p className="text-[26px]  font-bold">Making a design system from scratch</p>
              <p className="mt-5">12 Feb 2020 |  Design,Patten</p>
              <p className=" mt-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
