import React, { useState } from "react";
// import AvatarCrop from "./AvatarCrop";
import { Link } from "react-router-dom";
import UserGeneral from "../../../components/user profile/UserGeneral";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
const User = () => {
  const poi = ["Genral", "Favorite"];
  let qqq = ["name", "email", "phone"];
  let www = { name: "ali dkfj", email: "berfee@kwb.cn", phone: "09268557406" };
  const [query, setQuery] = useState("Genral");
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const [showCropImg, setShowCropImg] = useState(false);
  const [avatarCrop, setAvatarCrop] = useState({ preview: null });
  const [profilePicture, setProfilePicture] = useState(null);
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-col w-full ">
      {/* {showCropImg && (
        <div>
          <div
            onClick={() => setShowCropImg(false)}
            className="fixed w-full h-full bg-gray-900 bg-opacity-60 backdrop-blur-sm  "
          />
          <div
            onClick={() => setShowCropImg(false)}
            className="fixed w-full h-32 -top-20 bg-gray-900 bg-opacity-60 backdrop-blur-sm"
          />
        </div>
      )} */}

      {/* avatarCrop */}
      {/* {showCropImg && (
        // <AvatarCrop
        //   setAvatarCrop={setAvatarCrop}
        //   setShowCropImg={setShowCropImg}
        //   avatarCrop={avatarCrop}
        //   setProfilePicture={setProfilePicture}
        // />
      )} */}

      <h1 className="text-2xl font-bold mx-5 mt-8 mb-8">کاربر</h1>

      <div className="md:flex w-full px-5 y7:px-10 xl:px-16">
        <div className="bg-red-500 ml-20 min-w-[100px] my-10 max-w-[100px] h-[100px] rounded-[25%] ">
          <img src="" alt="" />
        </div>
        <div className="flex flex-wrap gap-3">
          {["نام", "نام خانوادگی", "کدملی", "موبایل", "ایمیل"].map(
            (userInfo, index) => (
              <fieldset
                key={index}
                className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl ${
                  selectedForChange !== userInfo
                    ? "border-[#787f98] border-opacity-40 "
                    : "border-btn"
                } duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
              >
                <legend
                  className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
                >
                  {userInfo}
                </legend>
                <div className="flex justify-between mb-1 ">
                  <p className="self-center pl-3">{userInfo}</p>
                </div>
              </fieldset>
            )
          )}
        </div>
      </div>

      <div className=" w-full px-5 y7:px-10 xl:px-16 sm:hidden">
        <ul className="flex gap-5 text-sm pb-2 overflow-x-auto scrollbar:!w-1.5 scrollbar:!h-1.5 md:mx-8  xl:mx-28 2xl:mx-36 text-[17px]">
          {poi.map((item, index) => (
            <Link
              to={{ pathname: "/user", search: item.toLocaleLowerCase() }}
              key={index}
            >
              <li
                className={`px-4 py-2   ${
                  query === item
                    ? "bg-[length:100%_2px] font-semibold text-btn"
                    : "bg-[length:0%_2px]"
                }  origin-right bg-left-bottom bg-gradient-to-r from-btn to-btn  bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
                onClick={() => setQuery(item)}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>{" "}
      </div>

      <div className=" w-full px-5 y7:px-10 xl:px-16 sm:hidden">
        {/* User Genral information */}

        {/* User Favorite Movies */}
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
