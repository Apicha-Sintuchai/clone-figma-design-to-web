import Image from "next/image";
import { Navbar } from "./navbar/Navbar";
import { Profile } from "./Profile/Profile";
import { Skill } from "./skill/Skill";
import { RecentWork } from "./Recentwork/RecentWork";
import { FutureWork } from "./FutureWork/FutureWork";


export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Profile></Profile>
      <RecentWork></RecentWork>
      <FutureWork></FutureWork>
  </div>
  
  );
}
