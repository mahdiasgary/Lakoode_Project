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
import axios from "axios";
import { useState } from "react";

const Navbar = ({ isSearch, setIsSearch, openMenu, setOpenMenu, from }) => {
  const { IsDarkMode, setMode } = useStateContext();
  const [loginStatus, setloginStatus] = useState(false);
  // const [userInfo,setUserInf]=useState()

  axios
    .get("https://localhost:7103/api/Account/Login", { withCredentials: true })
    .then((r) => {
      if (r.data.isSuccessFull) {
        setloginStatus(true);
        // setUserInf(r.data)
      }
      if (!r.data.isSuccessFull) {
        setloginStatus(false);
      }
    });

  return (
    <div className="w-full z-[60] relative">
      <div className={` justify-between ${from === "login" ? "flex " : 'md:flex hidden '}    p-5 `}>
      <Link to={"/"}>
            <div className=" self-center ">
              <img
                src={IsDarkMode ? logoImage : logoImageDark}
                alt="logoImage"
                className=" h-[35px] md:h-[40px] opacity-90 "
              />
            </div>
          </Link>
        <div className={`   flex   `}>
          <div
            onClick={() => setMode(!IsDarkMode)}
            className="mx-2 flex  text-[26px] self-center cursor-pointer "
          >
            {IsDarkMode ? (
              <HiSun />
            ) : (
              <IoMdMoon className={` ${from === "login" && 'lg:text-white'} text-[25px] text-btn ` }/>
            )}
          </div>
          <div className={` ${from === "login" && 'hidden'}`}>
            {loginStatus ? (
              <Link to={"/user"}>
                <button className={`${styles.profileLg_Btn} text-btn  `}>
                  <span>
                    <FaUser className="" />
                  </span>
                  <p className={`text-btn`}>پروفایل</p>
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

      <div className={` ${from === "login" ? "hidden " : 'flex flex-col md:hidden '} pt-4`}>
        <div className="flex  justify-between pt-2  px-5 ">
        
            <div
              onClick={() => setMode(!IsDarkMode)}
              className="mx-2 flex  text-[26px] self-center cursor-pointer "
            >
              {IsDarkMode ? (
                <HiSun />
              ) : (
                <IoMdMoon className="text-[25px] text-btn " />
              )}
            </div>
            <div className={` `}>
              {loginStatus ? (
                <Link to={"/user"}>
                  <button className={`${styles.profileLg_Btn} text-sm  `}>
                    <span>
                      <FaUser className="" />
                    </span>
                    <p>پروفایل</p>
                  </button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <button className={` ${styles.loginBtn} text-sm `}>ورود</button>
                </Link>
              )}
            </div>
        </div>
        <div className="flex justify-center">
        <Link to={"/"}>
            <div className=" self-center ">
              <img
                src={IsDarkMode ? logoImage : logoImageDark}
                alt="logoImage"
                className=" h-[35px] opacity- "
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
