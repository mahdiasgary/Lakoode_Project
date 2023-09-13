// import { adminSidbarItem } from "../../../constans";
import { styles } from "../../../styles/styles";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import logoImage from "../../../assets/logoImage.png";
import logoImageDark from "../../../assets/logoImageDark.png";
import AdminSideBarList from "./AdminSideBarList";
import { adminSidbarItem } from "../../../constans";
import { useStateContext } from "../../../contextProvider/ContextProvider";
const AdminSideBar = ({ openMenu, setOpenMenu, admin }) => {
  const { IsDarkMode, setMode } = useStateContext();
  // console.log(admin)
  return (
    <div
      className={`${
        styles.sideBar
      } overflow-y-auto origin-left  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md ${
        !openMenu && " left-[-300px] fixed"
      } ${
        openMenu &&
        "fixed lg:relative left-0   dark:bg-[#07070a] lg:dark:bg-transparent bg-screenLight"
      }  duration-500 z-[52] `}
    >
      <div className=" lg:hidden " onClick={() => setOpenMenu(!openMenu)}>
        <MdMenuOpen className="text-[27px] mt-10 mx-10 cursor-pointer text-btn  " />
      </div>
      <div className={` lg:hidden flex  flex-col `}></div>
      <div className=" font-extrabold hidden sm:mx-3 md:mx-5 lg:mx-8 mb-8  mt-10 lg:flex min-w-[145px] sm:min-w-[150px] ">
        <img
          src={IsDarkMode ? logoImage : logoImageDark}
          alt="logoImage"
          className=" h-[31.6px]  sm:h-[38px] mx-1"
        />
      </div>
      <div className="flex justify-between px-5 pb-5">
        <p className="self-center">{admin?.name + "  " + admin?.lastName}</p>
        <span className="text-btn self-center bg-btn bg-opacity-20 text-[13px] rounded-2xl px-2 py-1 ">
          انلاین
        </span>
      </div>
      <div>
        <AdminSideBarList
          subTitle="MENU"
          items={adminSidbarItem}
          menu={openMenu}
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
