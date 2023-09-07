import React, { useEffect, useState } from "react";
import AvatarCrop from "./AvatarCrop";
import UserProfileGenral from "./UserProfileGenral";
import { Link } from "react-router-dom";
import UserGeneral from "../../../components/user profile/UserGeneral";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
const UserProfile = ({history}) => {
  const poi = ["Genral", "Favorite"];
  let qqq = ["name", "email", "phone"];
  let www = { name: "ali dkfj", email: "berfee@kwb.cn", phone: "09268557406" };
  const [query, setQuery] = useState("Genral");
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const [showCropImg, setShowCropImg] = useState(false);
  const [avatarCrop, setAvatarCrop] = useState({ preview: null });
  const [profilePicture, setProfilePicture] = useState(null);
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [userInfo,setUserInf]=useState()
  useEffect(()=>{
    axios
      .get("https://localhost:7103/api/Account/Login", { withCredentials: true })
      .then((r) => {
        if (r.data.isSuccessFull) {
          setUserInf(r.data.data)
        }
        if (!r.data.isSuccessFull) {
          history.push('/login')
        }
      }); 
  },[])
    return (
      <div className="flex flex-col w-full h-screen p-20 ">
      <div className="flex">
        <h1 className="text-2xl self-center font-bold mx-5 mt-8 mb-8">کاربر</h1>
        <div className="self-cneter flex flex-col justify-center">
          {userInfo?.isDisabled && (
            <p className="text-red-500 rounded-xl bg-red-500 bg-opacity-20 px-5 py-2 mx-2 ">
              غیر فعال
            </p>
          )}
          {userInfo?.isAdmin && (
            <p className="text-blue-500 rounded-xl bg-blue-500 bg-opacity-20 px-5 py-2 mx-2 ">
              ادمین{" "}
            </p>
          )}
        </div>
      </div>

      <div className="md:flex w-full px-5 y7:px-10 xl:px-16">
        <div className="flex flex-wrap gap-3">
          <fieldset
            className={`flex border-[#787f98] border-opacity-40 flex-col justify-center border-b dark:rounded-none rounded-xl duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={`border-[#787f98] border-opacity-40 px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              نام{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{userInfo?.name}</p>
            </div>
          </fieldset>{" "}
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl border-[#787f98] border-opacity-40 duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              نام خانوادگی{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{userInfo?.lastName}</p>
            </div>
          </fieldset>{" "}
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl border-[#787f98] border-opacity-40 duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              موبایل{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{userInfo?.mobile}</p>
            </div>
          </fieldset>
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              کد ملی{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{userInfo?.nationalCode}</p>
            </div>
          </fieldset>
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              ایمیل{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{userInfo?.email}</p>
            </div>
          </fieldset>
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              تاریخ ثبت نام{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">
                {" "}
                {new Date(userInfo?.createdDate).toLocaleDateString("fa")}
              </p>
            </div>
          </fieldset>{" "}
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              رمز عبور{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{userInfo?.password}</p>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-8 md:self-center w-full px-5 y7:px-10 xl:px-16 ">
        <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
          <div className="flex justify-between mb-3 ">
            <p className="text-[20px] font-semibold mx-3 ">رزرو ها </p>
            <Link to={"/movies"}>
              <p className="text-btn font-semibold text-sm self-center mt-1 ">
                View All
              </p>
            </Link>
          </div>
          <div className="flex justify-center">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserProfile);
