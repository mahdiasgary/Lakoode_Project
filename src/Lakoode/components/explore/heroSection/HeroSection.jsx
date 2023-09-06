import React, { useRef, useState } from "react";
import { FaWifi } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { GiThroneKing, GiBigWave } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { RiBilliardsFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import Slider from "react-slider";
import { PiSunHorizonBold } from "react-icons/pi";
import Navbar from "../../navbar/Navbar";
import qqq from '../../../assets/bg3w.png'
const HeroSection = ({
  setPriceRoom,
  priceRange,
  setPriceRange,
  selectetOpt,
  setselectetOpt,
  priceRoom,
}) => {
  const progressRef = useRef(null);
  const [selectetOpt2, setselectetOpt2] = useState([]);

  const selectOptHendler = (selectOpt) => {
    let isSelected = selectetOpt.find((opt) => opt === selectOpt);

    if (isSelected) {
      const select = selectetOpt.filter((opt) => opt !== selectOpt);
      const select7 = select.filter((opt) => opt !== "z");

      setselectetOpt(select7);
    } else {
      if (selectetOpt.find((opt) => opt === "z")) {
        setselectetOpt([selectOpt]);
      } else setselectetOpt([...selectetOpt, selectOpt]);
    }

    let isSelected2 = selectetOpt2.find((opt) => opt === selectOpt);
    if (isSelected2) {
      const select2 = selectetOpt2.filter((opt) => opt !== selectOpt);
      setselectetOpt2(select2);
    } else setselectetOpt2([...selectetOpt2, selectOpt]);
  };

  const rehand = () => {
    setPriceRange([999000, 10000000]);
    setselectetOpt(["z"]);
    setselectetOpt2([]);
    setPriceRoom(["", 1, 2, 3, 4, 5, 6]);
  };
  return (
    <div>
      <div className="lg:flex lg:justify-center  ">
        <div className="relative bg-hero bg-no-repeat  bg-cover text-white">
          <div className="relative z-[5] pt-3 flex justify-center py-4 lg:hidden ">
          <Navbar className='sticky top-0' from={"ww"} />
          </div>
          <div className=" 3xl:bg-[#4a6dff]   dark:bg-[#0f0f0f] absolute lg:rounded-[50px]  inset-0 w-full h-full">
           
            <img
              src={qqq}
              alt="d"
              className="opacity- transform lg:rounded-b-[50px] hidden dark:hidden lg:flex  w-full h-full"
            />
            <img
              alt="lakoode"
              src={"https://s6.uupload.ir/files/bg2_vrz1.png"}
              className="opacity-70 hidden dark:lg:flex transform lg:rounded-[50px]    w-full h-full"
            />
            <img
              alt="lakoode"
              src={"https://s6.uupload.ir/files/test2_j1lu.png"}
              className="opacity-50 transform lg:rounded-[50px]  lg:hidden  w-full h-full"
            />
          </div>
          <div className="relative  containe flex flex-co  items-cente justify-cente pt-0 pb-36 sm:py- lg:py-24 h-[60vh] w-[98vw]   2xl:py-72">
            <div
              className="hidden md:flex flex-col  mt-12 text-black mx-32  backdrop-blur-s p-4 rounded-3xl bg-[#0f0f0f bg-opacity-10  text-en  font-bold   lg:text-[20px]
    "
            >
              <p className="opacity-70 text-">
                تجربه ای بینظیر وفراموش نشدنی
                {/* Enjoy Your  */}
              </p>

              <p className="opacity-80 text">
                در مجتمع اقامتی
                {/* Dream Vacation in Lakoode */}
              </p>
              <p className="lg:text-[30px] ">لاکوده</p>
              <p className="text-[14px] font-bold hidden lg:flex mt-8 ">
                مجتمع اقامتی و تفریحی لاکوده بر این تلاش دارد که به شما عزیزان
                محیطی پر از ارامش اريه دهد.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white dark:text-white  relative lg:-top-[000px] mb-10 lg:dark:-top-[0px] -top-[250px] text-en  flex flex-col w-full   font-bold  mt-10 text-[34px]">
        <div className="flex justify-center text-center">
          <div className="flex justify-center text-[16px] text-black  dark:text-white w-[90vw] max-w-[880px] lg:h-[200px] rounded-3xl  bg-white dark:bg-prameryColorDark dark:bg-opacity-50 dark:backdrop-blur-sm lg:border-0 border-[#4a6dff] lg:shadow-2xl  ">
            <div className="flex flex-col w-full">
              <div className="flex lg:mx-10 mx-1 md:mx-3  flex-col md:flex-row  md:justify-between lg:h-full">
                <div className="flex flex-col justify-between ">
                  <div className="text-start text-[17px] mt-7 flex mb-5 lg:mb-0 ">
                    <p>فیلتر پیشرفته</p>
                    <div
                      onClick={rehand}
                      className="text-sm self-center mx-4 flex text-btn cursor-pointer group "
                    >
                      <AiOutlineReload className="self-center mx-1 text-[16px] group-hover:rotate-90 duration-200" />
                      دوباره
                    </div>
                  </div>
                  <div className="flex flex-col justify-center h-full w-full ">
                    <ul className="flex justify-around md:justify-start">
                      <li
                        onClick={() => selectOptHendler("وایفای")}
                        className={`${
                          selectetOpt2.find((opt) => opt === "وایفای")
                            ? "text-btn border-2 border-btn shadow-lg"
                            : "dark:border-border dark:text-screenLight border-2"
                        }   flex  hover:border-btn  flex-col justify-center  border   rounded-xl w-[70px]  cursor-pointer duration-150 h-[70px] lg:w-[70px] lg:h-[70px] text-[16px] `}
                      >
                        <div
                          className={`${
                            selectetOpt2.find((opt) => opt === "وایفای")
                              ? "text-btn"
                              : "text-red-500 "
                          } flex justify-center text-[18px] `}
                        >
                          <FaWifi />
                        </div>
                        <p className="text-sm mt-1">wifi</p>
                      </li>

                      <li
                        onClick={() => selectOptHendler("استخر")}
                        className={`${
                          selectetOpt2.find((opt) => opt === "استخر")
                            ? "text-btn border-2 border-btn shadow-lg"
                            : "dark:border-border dark:text-screenLight border-2"
                        }  lg:mx-4 hover:border-btn  flex flex-col justify-center border rounded-xl w-[70px]  cursor-pointer duration-150 h-[70px] lg:w-[70px] lg:h-[70px] text-[16px] `}
                      >
                        <div
                          className={`${
                            selectetOpt2.find((opt) => opt === "استخر")
                              ? "text-btn"
                              : "dark:text-blue-500 text-violet-700"
                          } flex  justify-center text-[28px]  `}
                        >
                          <LiaSwimmingPoolSolid />
                        </div>
                        <p className="text-sm">استخر</p>
                      </li>
                      <li
                        onClick={() => selectOptHendler("شاه نشین")}
                        className={`${
                          selectetOpt2.find((opt) => opt === "شاه نشین")
                            ? "text-btn border-2 border-btn shadow-lg"
                            : "dark:border-border dark:text-screenLight border-2"
                        } flex flex-col hover:border-btn  justify-center border rounded-xl w-[70px] cursor-pointer h-[70px] lg:w-[70px] lg:h-[70px] duration-150 text-[16px] `}
                      >
                        <div
                          className={` ${
                            selectetOpt2.find((opt) => opt === "شاه نشین")
                              ? "text-btn"
                              : "text-teal-500"
                          } flex justify-center text-[22px] `}
                        >
                          <GiThroneKing />
                        </div>
                        <p className="text-sm">شاه نشین</p>
                      </li>
                      <li
                        onClick={() => selectOptHendler("رو به دریا")}
                        className={`${
                          selectetOpt2.find((opt) => opt === "رو به دریا")
                            ? "text-btn border-2 border-btn shadow-lg"
                            : "dark:border-border dark:text-screenLight border-2"
                        }  lg:mx-4 flex hover:border-btn  flex-col justify-center border rounded-xl w-[70px] cursor-pointer h-[70px] lg:w-[70px] lg:h-[70px] duration-150 text-[16px] `}
                      >
                        <div
                          className={`${
                            selectetOpt2.find((opt) => opt === "رو به دریا")
                              ? " dark:text-btn"
                              : "dark:text-yellow-300 text-btn"
                          } flex justify-center text-[23px] `}
                        >
                          <PiSunHorizonBold />
                        </div>
                        <p className="text-sm">رو به دریا </p>
                      </li>
                      <li
                        onClick={() => selectOptHendler("بیلیارد")}
                        className={`${
                          selectetOpt2.find((opt) => opt === "بیلیارد")
                            ? "text-btn border-2 border-btn shadow-lg"
                            : "dark:border-border dark:text-screenLight border-2"
                        } flex  flex-col hover:border-btn  justify-center border rounded-xl w-[70px] cursor-pointer h-[70px] lg:w-[70px] lg:h-[70px] duration-150 text-[16px] `}
                      >
                        <div
                          className={`${
                            selectetOpt2.find((opt) => opt === "بیلیارد") &&
                            "text-btn"
                          } flex justify-center text-[20px]`}
                        >
                          <RiBilliardsFill />
                        </div>
                        <p className="text-sm">بیلیارد</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col mx-3 ">
                  <div className="text-start">
                    <div className="sm:w-[310px] lg:w-[350px] mt-5">
                      <div className="flex flex-col">
                        <label className="mb-2 dark:text-textPlight inline-block ml-10">
                          قیمت (به تومان)
                        </label>
                        <div className="flex justify-between">
                          <div>
                            تا
                            {/* <input
                              value={priceRange[1].toLocaleString()}
                              type="phone"
                              onChange={(e) =>
                                setPriceRange([
                                  priceRange[0],
                                  e.target.value
                                ])
                              }
                              className="faNumber text-end border w-[90px] rounded-lg   px-2 py-1 mx-2"
                            /> */}
                            <div className="faNumber inline text-end border dark:border-border dark:border-2 w-[100px] rounded-lg   px-2 py-1 mx-2">
                              {priceRange[1].toLocaleString()}{" "}
                            </div>
                          </div>
                          <div>
                            از
                            {/* <input
                              value={priceRange[0].toLocaleString()}
                              type="phone"
                              onChange={(e) =>
                                setPriceRange([e.target.value, priceRange[1]])
                              }
                              className="faNumber text-end border w-[90px] rounded-lg   px-2 py-1 mx-2"
                            /> */}
                            <div className="faNumber  dark:border-border dark:border-2 inline text-end border w-[100px] rounded-lg   px-2 py-1 mx-2">
                              {priceRange[0].toLocaleString()}{" "}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="slider  h-1 bg-gray-300 ">
                        <div
                          ref={progressRef}
                          className="progress absolute bg-red-500 h-1"
                        ></div>
                        <Slider
                          className={"slider"}
                          onChange={setPriceRange}
                          value={priceRange}
                          min={1000000}
                          max={10000000}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="h-full flex flex-col my-4 justify-center ">
                    <div className="flex  ">
                      <p className="self-center mx-2">تعداد اتاق</p>
                      <select
                        onChange={(e) => setPriceRoom([e.target.value])}
                        name=""
                        value={priceRoom}
                        id="pet" // placeholder="h"
                        className="w-[200px] border dark:bg-[#111111] dark:border-0 p-2 px-4 rounded-xl outline-none "
                      >
                        <option value="" className="text-[14px]">
                          انتخاب کنید
                        </option>
                        <option value="2"> دو</option>
                        <option value="3"> سه</option>
                        <option value="4"> چهار</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative flex lg:hidden justify-center -top-[90px] w-full">
        <div className="w-[90vw] rounded-3xl  h-[220px] bg-blue-800">
          <Image
            className="opacity-70 transform rounded-3xl w-full h-full"
            src="/88.jpg"
            alt="img"
            height={90}
            width={500}
          />

          <div className="absolute top-0 m-5 text-white text-[25px] font-bold">
            لاکوده
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
