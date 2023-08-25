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

const Navbar = ({ isSearch, setIsSearch, openMenu, setOpenMenu,from }) => {
  const { IsDarkMode, setMode, loginStatus } = useStateContext();

  return (
    <div className="flex justify-between pt-3 mx-3 md:mx-7 ">
      <div className="flex self-center justify-center ">
        <div
          className="self-center hidden md:flex lg:hidden "
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <MdMenuOpen className="text-[27px] mt-4 sm:mx-3 cursor-pointer text-btn  " />
          ) : (
            <MdMenu className="text-[27px] mt-4 sm:mx-3 cursor-pointer hover:text-btn duration-200 " />
          )}
        </div>
        <Link to={'/'} >
        
        <div className="self-center  font-extrabold sm:mx-3 mt-3 flex min-w-[145px] sm:min-w-[150px] z-40 ">
          <img
            src={IsDarkMode ? logoImage : logoImageDark}
            alt="logoImage"
            className=" h-[40px]  "
          />
          {/* <p className="self-center text-[18px] sm:text-[21px]">
            MOVIE <span className="text-btn">MAN</span>{" "}
          </p> */}
        </div>
        </Link>
      </div>
      <div className="self-center  z-20 flex  ">
        <div
          onClick={() => setMode(!IsDarkMode)}
          className="self-center mx-2 text-[26px] mt-4 cursor-pointer "
        >
          {IsDarkMode ? (
            <HiSun />
          ) : (
            <IoMdMoon className="text-[25px] text-btn " />
          )}
        </div>
<div className={`${from==='login' && 'hidden' } mt-4`}>

        {loginStatus?.isSuccessFull ? (
          <Link to={"/profile"}>
            <button className={`${styles.profileLg_Btn}  `}>
              <span>
                <FaUser className="inline self-center mr-2" />
              </span>
              <p>PROFILE</p>
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className={`${styles.loginBtn}`}>LOG IN</button>
          </Link>
        )}
</div>

      </div>
    </div>
  );
};

export default Navbar;
