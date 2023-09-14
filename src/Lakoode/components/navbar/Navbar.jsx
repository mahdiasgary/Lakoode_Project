import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { styles } from "../../styles/styles";
import logoImage from "../../assets/logoImage.png";
import logoImageDark from "../../assets/logoImageDark.png";
import { HiSun } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { useStateContext } from "../../contextProvider/ContextProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Navbar = ({  from }) => {
  const { IsDarkMode, setMode } = useStateContext();
  const [loginStatus, setloginStatus] = useState(false);
  const [qq, setqq] = useState(false);

  axios
    .get("https://localhost:7103/api/Account/Login", { withCredentials: true })
    .then((r) => {
      if (r.data.isSuccessFull) {
        setloginStatus(true);
      }
      if (!r.data.isSuccessFull) {
        setloginStatus(false);
      }
    });
  axios
    .get("https://localhost:7103/api/Admin/Home/AdminIndex", {
      withCredentials: true,
    })
    .then((r) => {
      if (r.data.isSuccessFull) {
        setqq(true);
      }
    });

  return (
    <div className="w-full z-[60] relative ">
      <div
        className={` justify-between ${
          from === "login" ? "flex " : "md:flex hidden "
        }    p-5 `}
      >
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
              <IoMdMoon
                className={` ${
                  from === "login" && "lg:text-white"
                } text-[25px] text-btn `}
              />
            )}
          </div>
          <div className={` ${from === "login" && "hidden"}`}>
            {loginStatus ? (
              <Link to={`/${qq ? "admin" : "user"}`}>
                <button className={`px-2 lg:px-5 text-textDark py-2 self-center btn rounded-xl hover:bg-blue-800 hover:rounded-md duration-200 font-bold text-sm flex  `}>
                
                  <span>
                    <FaUser className="" />
                  </span>
                  <p className={``}>{qq ? "پنل ادمین" : "پروفایل"}</p>
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

      <div
        className={` ${
          from === "login" ? "hidden " : "flex flex-col md:hidden "
        } pt-4`}
      >
        <div className="flex  justify-between mg:pt-2  px-2 md:px-5 ">
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
              <Link to={`/${qq ? "admin" : "user"}`}>
                <button className={`px-2 lg:px-10 text-textDark py-2 self-center btn rounded-xl hover:bg-blue-800 hover:rounded-md duration-200 font-bold text-sm flex  `}>
                  <span className="self-center pl-1">
                    <FaUser className="" />
                  </span>
                  <p className={``}>{qq ? "پنل ادمین" : "پروفایل"}</p>
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
              {from === "ww" ? (
                <>
                  <img
                    src={logoImage}
                    alt="logoImage"
                    className=" h-[35px] lg:hidden  md:h-[40px] opacity-90 "
                  />
                  <img
                    src={IsDarkMode ? logoImage : logoImageDark}
                    alt="logoImage"
                    className=" h-[35px] hidden lg:flex md:h-[40px] opacity-90 "
                  />
                </>
              ) : (
                <img
                  src={IsDarkMode ? logoImage : logoImageDark}
                  alt="logoImage"
                  className=" h-[35px] md:h-[40px] opacity-90 "
                />
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
