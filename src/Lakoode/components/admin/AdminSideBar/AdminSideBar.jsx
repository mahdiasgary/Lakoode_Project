// import { adminSidbarItem } from "../../../constans";
import { styles } from "../../../styles/styles";
import { MdMenuOpen } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import logoImage from "../../../assets/logoImage.png";
import logoImageDark from "../../../assets/logoImageDark.png";
import AdminSideBarList from "./AdminSideBarList";
import { adminSidbarItem } from "../../../constans";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import Swal from "sweetalert2";
import axios from "axios";
const AdminSideBar = ({ openMenu, setOpenMenu, admin }) => {
  const { IsDarkMode, setMode } = useStateContext();
  const logout = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: "مایل به خروج از حساب کاربری خود هستید",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " بله",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        axios({
          withCredentials: true,
          method: "post",
          url: `https://localhost:7103/api/Account/SignOut`,
        })
          .then((r) => window.location.reload())
          .catch((r) => console.log(r));
      }
    });
  };
  return (
    <div
      className={`${
        styles.sideBar
      } overflow-y-auto origin-right  scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md ${
        !openMenu && " right-[-300px] fixed"
      } ${
        openMenu &&
        "fixed lg:relative right-0   dark:bg-[#07070a] lg:dark:bg-transparent bg-screenLight"
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
      <div className="flex justify-between px-5 pt-5 lg:pt-0 pb-5">
        <p className="self-center">{admin?.name + "  " + admin?.lastName}</p>
        <button
          onClick={logout}
          className="text-red-500 gap-1 flex hover:bg-opacity-100 duration-200 hover:text-white  self-center bg-red-500  bg-opacity-20 text-[13px] rounded-2xl px-3 py-1 "
        >
          <FaPowerOff className="self-center " />
          <p>خروج </p>
        </button>
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
