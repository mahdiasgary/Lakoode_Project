import { useStateContext } from "../contextProvider/ContextProvider";
import MainTilt from "../components/explore/mainTile/MainTilt";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/explore/heroSection/HeroSection";
import { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import FooterMenu from "../components/mobile-footer-menu/FooterMenu";
import Foter from "./Foter";
const Explore = ({ openMenu, setOpenMenu }) => {
  const { rtl } = useStateContext();
  const [priceRange, setPriceRange] = useState([999000, 10000000]);
  const [priceRoom, setPriceRoom] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, ""]);
  const [selectetOpt, setselectetOpt] = useState(["z"]);
  return (
    <div>
      <div className="fixed opacity-20 hidden dark:flex ">
        <img
          alt={"f"}
          src={"https://s6.uupload.ir/files/bg3_kuz9.png"}
          className="w-screen h-screen"
          height={2000}
          width={2000}
        />
      </div>
      <div className="sticky backdrop-blur-sm top-0 hidden  z-[100] lg:flex">
        <Navbar from={"ex"} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      {/* <div className="mt-8 lg:w-full  mx-5  flex xs:flex-row flex-col xs:justify-between "> */}
      <HeroSection
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        setPriceRoom={setPriceRoom}
        selectetOpt={selectetOpt}
        priceRoom={priceRoom}
        setselectetOpt={setselectetOpt}
      />
      <MainTilt />
    
      <Foter/>
    </div>
  );
};

export default Explore;
