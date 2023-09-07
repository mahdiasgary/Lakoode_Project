import { useStateContext } from "../contextProvider/ContextProvider";
import MainTilt from "../components/explore/mainTile/MainTilt";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/explore/heroSection/HeroSection";
import { useState } from "react";
import Foter from "./Foter";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logoImage from "../assets/logoImage.png";
import logoImageDark from "../assets/logoImageDark.png";
import { HiSun } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { styles } from "../styles/styles";
const Explore = ({ openMenu, setOpenMenu }) => {
  const {rtl, IsDarkMode, setMode, loginStatus } = useStateContext();

  // const { rtl } = useStateContext();
  const [priceRange, setPriceRange] = useState([999000, 10000000]);
  const [priceRoom, setPriceRoom] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, ""]);
  const [selectetOpt, setselectetOpt] = useState(["z"]);
  return (
    <div className="dark:bg-[rgb(40,42,55)]">
      <div className="fixed opacity-20 hidden dark:flex ">
        {/* <img
          alt={"f"}
          src={"https://s6.uupload.ir/files/bg3_kuz9.png"}
          className="w-screen h-screen"
          height={2000}
          width={2000}
        /> */}
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
