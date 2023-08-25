import { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import CalandreDetalis from "./CalandreDetalis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { data1 } from "../../explore/mainTile/MainTilt";
const Calandre = ({setRangeDays , rangeDays,seletedDays}) => {
  const villa = data1
  const optionsD = {
    day: "numeric",
  };
  const nowDay = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsD);
// console.log(nowDay)
const ert=' k'
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

  const tr = [
    [0, 7],
    [7, 14],
    [14, 21],
    [21, 28],
    [28, 34],
  ];

 
  const optionsM = {
    month: "long",
  };
  const optionsMnum = {
    month: "numeric",
  };
  const optionsY = {
    year: "numeric",
  };
  const optionsW = {
    weekday: "long",
  };
  const nowMounth = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsM);
  const nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  const nowMnum = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsMnum);

  const index = mounth.findIndex((dr) => dr[0] === parseInt(nowMnum));
  const indexOfRD = villa?.reservation.findIndex((dr) => dr[0] === nowMnum);
  const indexIncP = villa?.specialIncPrice.findIndex((qq) => qq[0] === nowMnum);
  const indexDecP = villa?.discount.findIndex((qq) => qq[0] === nowMnum);
  const rd = villa?.reservation;
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className=" flex flex-col  lg:justify-center lg:gap-10">
      <div className="flex  justify-center  ">
        {/* <CalandreDetalis
          rd={rd[indexOfRD]}
          mounth={mounth[index]}
          specialIncPrice={villa?.specialIncPrice[indexIncP]}
          discount={villa?.discount[indexDecP]}
          year={1402}
          price={villa?.price}
          incPrice={villa?.incPrice}
          thitM={nowMnum == mounth[index][0]}
          discountPr={villa?.discountPr}
          setRangeDays={setRangeDays} rangeDays={rangeDays}
        /> */}
      </div>
      <div className="w-[100vw] lg:w-[70vw] h-[600px] relative self-center flex   ">
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
          {mounth.slice(nowMnum-1, 12).map((mah) => (
            <SwiperSlide key={mah[0] - 1} className=" ">
              <div className="  lg:w-[70vw] px-5    flex justify-center dark:bg-transparent   rounded-3xl ">
                <CalandreDetalis
                  rd={rd[mah[0] - 1]}
                  mounth={mounth[mah[0] - 1]}
                  specialIncPrice={villa.specialIncPrice[mah[0] - 1]}
                  discount={villa?.discount[mah[0] - 1]}
                  year={1402}
                  price={villa?.price}
                  incPrice={villa?.incPrice}
                  thitM={nowMnum == mah[0]}
                  discountPr={villa?.discountPr}
                  nowYear={nowYear}
                  nowMnum={nowMnum}
                  seletedDays={seletedDays}
                  setRangeDays={setRangeDays} rangeDays={rangeDays}
                />
              </div>{" "}
            </SwiperSlide>
          ))}

        </Swiper>

        <div className="absolute w-[100vw] top-5 z-[33] pl-10 xl:pl-24 md:w-[80vw]  lg:w-[43vw] xl:w-[48vw] flex justify-end ">
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
      </div>
    </div>
  );
};

export default Calandre;

