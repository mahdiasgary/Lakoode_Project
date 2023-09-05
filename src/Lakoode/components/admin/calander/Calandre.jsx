import { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import CalandreDetalis from "./CalandreDetalis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ClanderForEveryMounth from "./ClanderForEveryMounth";
const Calandre = ({
  setRangeDays,
  villaa,
  rangeDays,
  seletedDays,
  rangeDaysForUpdate,
  setRangeDaysForUpdate,
  state,
  setState,
  year,
  setyear,
}) => {
  const mounth = [
    // روز ممنوع -جمعه-ماه-فاصله شنبه تا1 -شماره ماه
    [1, 4, "فروردین", [3, 10, 17, 24, 31], 32],
    [2, 3, "اردیبهشت", [18, 25], 32],
    [3, 3, "خرداد", [18, 25], 32],
    [4, 3, "تیر", [18, 25], 32],
    [5, 3, "مرداد", [18, 25], 32],
    [6, 4, "شهریور", [3, 10, 17, 24, 31], 32],
    [7, 0, "مهر", [7, 14, 21, 28], 31],
    [8, 2, "آبان", [5, 12, 19, 26], 31],
    [9, 4, "آذر", [3, 10, 17, 24], 31],
    [10, 6, "دی", [1, 8, 15, 22, 29], 31],
    [11, 1, "بهمن", [6, 13, 20, 27], 31],
    [12, 3, "اسفند", [4, 11, 18, 25], 30],
  ];

  const optionsMnum = {
    month: "numeric",
  };

  const nowMnum = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsMnum);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    setRangeDaysForUpdate({
      day: "",
      m: "",
    });
    setRangeDays({
      f: "",
      s: "",
      y: "",
      m: "",
    });
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    setRangeDaysForUpdate({
      day: "",
      m: "",
      y:""
    });
    setRangeDays({
      f: "",
      s: "",
      y: "",
      m: "",
    });
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className=" flex flex-col  lg:justify-center lg:gap-10">
      <div className="w-[100vw] lg:w-[70vw] h-[600px] relative self-center flex   ">
        <div className="absolute left-0 top-5 z-[33] pl-10 xl:pl-20  xl:w-[20vw] flex justify-end ">
          <div
            className="prev-arrow flex  bg-white text-[19px] hover:bg-btn hover:text-white duration-300 hover:border-btn shadow-md cursor-pointer  mx-4 text-btn border w-9 h-9 rounded-lg  justify-center   "
            onClick={handlePrev}
          >
            <BsChevronLeft className="self-center rotate-180" />
          </div>
          <div
            className="next-arrow flex  bg-white text-[19px] hover:bg-btn hover:text-white duration-300 hover:border-btn shadow-md cursor-pointer   text-btn border w-9 h-9 rounded-lg  justify-center  ro "
            onClick={handleNext}
          >
            <BsChevronLeft className="self-center" />
          </div>
        </div>
        <Swiper
          ref={sliderRef}
          style={{
            "--swiper-navigation-color": "#3b82f6",
            "--swiper-navigation-size": "40px",
            "--swiper-pagination-color": "#3b82f6",
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Navigation]}
          className={`  relative h-[600px]   rounded-3xl   flex justify-center  `}
        >
          {mounth.slice(nowMnum - 1, 12).map((mah) => (
            <SwiperSlide key={mah[0] - 1} className=" ">
              <div className="  lg:w-[70vw] px-5    flex justify-center dark:bg-transparent   rounded-3xl ">
                <ClanderForEveryMounth
                  seletedDays={seletedDays}
                  mounth={mah}
                  villa={villaa}
                  rangeDays={rangeDays}
                  setRangeDays={setRangeDays}
                  rangeDaysForUpdate={rangeDaysForUpdate}
                  setRangeDaysForUpdate={setRangeDaysForUpdate}
                  state={state}
                  setState={setState}
                  year={year}
                  setyear={setyear}
                />
              </div>
            </SwiperSlide>
          ))}
          {mounth.map((mah) => (
            <SwiperSlide key={mah[0] - 1} className=" ">
              <div className="  lg:w-[70vw] px-5    flex justify-center dark:bg-transparent   rounded-3xl ">
                <ClanderForEveryMounth
                  seletedDays={seletedDays}
                  mounth={mah}
                  villa={villaa}
                  rangeDays={rangeDays}
                  setRangeDays={setRangeDays}
                  rangeDaysForUpdate={rangeDaysForUpdate}
                  setRangeDaysForUpdate={setRangeDaysForUpdate}
                  state={state}
                  setState={setState}
                  year={parseInt(year) + 1}
                  setyear={setyear}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Calandre;
