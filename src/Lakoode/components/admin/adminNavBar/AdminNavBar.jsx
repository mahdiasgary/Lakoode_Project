import { MdMenu, MdMenuOpen } from "react-icons/md";
import { styles } from "../../../styles/styles";
import logoImage from "../../../assets/logoImage.png";
import logoImageDark from "../../../assets/logoImageDark.png";
import {HiSun} from 'react-icons/hi2'
import {IoMdMoon } from 'react-icons/io'
import { useStateContext } from "../../../contextProvider/ContextProvider"; 
const AdminNavBar = ({
  isSearch,
  setIsSearch,
  openMenu,
  setOpenMenu,
}) => {

  const {IsDarkMode,setMode}=useStateContext()
  return (
    <div className="flex  justify-between pt-3 mx-3 md:mx-7 ">
      <div className="flex self-center justify-center mb-10 ">
        <div
          className="self-center flex lg:hidden "
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <MdMenuOpen className="text-[27px] mt-4 sm:mx-3 cursor-pointer text-btn  " />
          ) : (
            <MdMenu className="text-[27px] mt-4 sm:mx-3 cursor-pointer hover:text-btn duration-200 " />
          )}
        </div>
        <div className="self-center  lg:hidden font-extrabold sm:mx-3 mt-4 flex min-w-[145px] sm:min-w-[150px] z-40 ">
          <img
            src={IsDarkMode ? logoImage : logoImageDark}
            alt="logoImage"
            className=" h-[31.6px]  sm:h-[38px] mx-1"
          />
         
        </div>
      </div>
      {/* <Search isSearch={isSearch} setIsSearch={setIsSearch} /> */}
      <div className="self-center mt-4  z-20 hidden lg:flex  ">
        <div 
        onClick={()=>setMode(!IsDarkMode)}
        className="self-center mx-2 text-[26px] cursor-pointer ">
          {IsDarkMode? <HiSun/> : <IoMdMoon className="text-[25px] text-btn "/>
}
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
