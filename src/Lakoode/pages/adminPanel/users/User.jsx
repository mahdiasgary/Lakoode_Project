import React, { useEffect, useState } from "react";
// import AvatarCrop from "./AvatarCrop";
import { Link, useLocation } from "react-router-dom";
import UserGeneral from "../../../components/user profile/UserGeneral";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import axios from "axios";
const User = () => {
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const usermobile = useLocation().search.split("?")[1];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:7103/api/User/GetUserDetail?mobile=${usermobile}`)
      .then((r) => setData(r.data.data));
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <div className="flex">
        <h1 className="text-2xl self-center font-bold mx-5 mt-8 mb-8">کاربر</h1>
        <div className="self-cneter flex flex-col justify-center">
          {data.isDisabled && (
            <p className="text-red-500 rounded-xl bg-red-500 bg-opacity-20 px-5 py-2 mx-2 ">
              غیر فعال
            </p>
          )}
          {data.isAdmin && (
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
              <p className="self-center pl-3">{data.name}</p>
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
              <p className="self-center pl-3">{data.lastName}</p>
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
              <p className="self-center pl-3">{data.mobile}</p>
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
              <p className="self-center pl-3">{data.nationalCode}</p>
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
              <p className="self-center pl-3">{data.email}</p>
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
                {new Date(data.createdDate).toLocaleDateString("fa")}
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
              <p className="self-center pl-3">{data.password}</p>
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
            <Swiper
              breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 6 },
                570: { slidesPerView: 3, spaceBetween: 10 },
                770: { slidesPerView: 4, spaceBetween: 10 },

                1527: { slidesPerView: 5, spaceBetween: 9 },
                2027: { slidesPerView: 6, spaceBetween: 9 },
                2827: { slidesPerView: 7, spaceBetween: 9 },
              }}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "30px",
                "--swiper-pagination-color": "#fff",
              }}
              // slidesPerView={3}
              // spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className={`relative h-[200px] md:h-[270px] x:h- xl:max-w-[65vw] flex  `}
            ></Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
