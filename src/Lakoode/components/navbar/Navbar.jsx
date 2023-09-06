import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { styles } from "../../styles/styles";
import logoImage from "../../assets/logoImage.png";
import logoImageDark from "../../assets/logoImageDark.png";
import Search from "./Search";
import { HiSun } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { useStateContext } from "../../contextProvider/ContextProvider";
import { Link } from "react-router-dom";

const Navbar = ({ isSearch, setIsSearch, openMenu, setOpenMenu, from }) => {
  const { IsDarkMode, setMode, loginStatus } = useStateContext();

  return (
    <div className="flex justify-between w-full  px-3 md:px-7 ">
      <div className="self-  z-20 flex w-0 md:w-[100px]  lg:hidden text-[26px]">
        <div
          onClick={() => setMode(!IsDarkMode)}
          className="  cursor-pointer "
        >
          {IsDarkMode ? (
            <HiSun />
          ) : (
            <IoMdMoon className="text-[25px] text-btn " />
          )}
        </div>
      </div>
      <div className="flex self-center justify-center ">

        <Link to={"/"}>
          <div className="self-center  font-extrabold sm:mx-3 flex min-w-[145px] sm:min-w-[150px] z-40 ">
            <img
              src={IsDarkMode || from =='ww' ? logoImage : logoImageDark}
              alt="logoImage"
              className=" h-[40px] opacity-90 "
            />
          </div>
        </Link>
      </div>

      <div className="   flex   ">
        <div
          onClick={() => setMode(!IsDarkMode)}
          className="mx-2 lg:flex hidden text-[26px] self-center cursor-pointer "
        >
          {IsDarkMode ? (
            <HiSun />
          ) : (
            <IoMdMoon className="text-[25px] text-btn " />
          )}
        </div>
        <div className={`${from === "login" && "hidden"} `}>
          {loginStatus ? (
            <Link to={"/user"}>
              <button className={`${styles.profileLg_Btn}  `}>
                <span>
                  <FaUser className="" />
                </span>
                <p>پروفایل</p>
              </button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className={` ${styles.loginBtn} `}>ورود</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
