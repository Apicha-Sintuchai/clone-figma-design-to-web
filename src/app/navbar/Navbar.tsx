import React from "react";
import { IoIosAdd } from "react-icons/io";
import Link from "next/link";
export const Navbar = () => {
  return (
    <React.Fragment>
      <div className=" flex justify-end m-5 font-medium">
        {/* {modile} */}
        <div>
          <ul className="hidden max-sm:flex space-x-4">
          <IoIosAdd />
          </ul>
        </div>
   
      
        {/* {window} */}
        <div>
        <ul className=" hidden md:flex space-x-4 lg:flex">
          <li >
            <Link href={"/fuckyou"}>Work</Link>
          </li>
          <li>blog</li>
          <li>COntract</li> 
        </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
