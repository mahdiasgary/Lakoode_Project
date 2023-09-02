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
    <div className="flex justify-between w-full lg:pt-3 px-3 md:px-7 ">
      <div className="self-  z-20 flex w-[100px]  lg:hidden text-[26px]">
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
        {/* <div
          className="self-center hidden md:flex lg:hidden "
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <MdMenuOpen className="text-[27px] mt-4 sm:mx-3 cursor-pointer text-btn  " />
          ) : (
            <MdMenu className="text-[27px] mt-4 sm:mx-3 cursor-pointer hover:text-btn duration-200 " />
          )}
        </div> */}
        <Link to={"/"}>
          <div className="self-center  font-extrabold sm:mx-3 lg:pt-3 pt-9 flex min-w-[145px] sm:min-w-[150px] z-40 ">
            <img
              src={IsDarkMode || from =='ww' ? logoImage : logoImageDark}
              alt="logoImage"
              className=" h-[40px]  "
            />
          </div>
        </Link>
      </div>

      <div className="  z-20 flex   ">
        <div
          onClick={() => setMode(!IsDarkMode)}
          className="mx-2 lg:flex hidden text-[26px] lg:mt-[21px] cursor-pointer "
        >
          {IsDarkMode ? (
            <HiSun />
          ) : (
            <IoMdMoon className="text-[25px] text-btn " />
          )}
        </div>
        <div className={`${from === "login" && "hidden"} lg:mt-4`}>
          {loginStatus ? (
            <Link to={"/user"}>
              <button className={`${styles.profileLg_Btn}  `}>
                <span>
                  <FaUser className="inline self-center mr-2" />
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
