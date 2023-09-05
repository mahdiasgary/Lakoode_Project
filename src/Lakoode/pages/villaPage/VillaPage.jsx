// import Navigationn from "../components/Navigation";
import { FaBath, FaBed } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Calandre2 from "./Calandre2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { FaWifi, FaDumpsterFire, FaDesktop } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";
import { LiaSwimmingPoolSolid, LiaDumpsterFireSolid } from "react-icons/lia";
import { RiBilliardsFill, RiParkingBoxLine } from "react-icons/ri";
import { PiFanBold, PiSunHorizonBold } from "react-icons/pi";
import {
  GiComputerFan,
  GiVacuumCleaner,
  GiTap,
  GiCctvCamera,
  GiSecurityGate,
  GiForkKnifeSpoon,
  GiHockey,
  GiThroneKing,
} from "react-icons/gi";
import { BiHomeCircle, BiFootball } from "react-icons/bi";
import {
  MdOutlineTableBar,
  MdOutlineBathtub,
  MdOutlineLocalLaundryService,
  MdOutlineKitchen,
  MdOutlineSoupKitchen,
  MdOutlineGasMeter,
  MdOutlinePower,
} from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import {
  PiHardDrives,
  PiToiletPaperDuotone,
  PiBugBeetleDuotone,
  PiToiletDuotone,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  useHistory,
  withRouter,
} from "react-router-dom/cjs/react-router-dom.min";

export const data1 = {
  id: 1,
  reservation: [
    ["1", ,],
    ["2", ,],
    ["3", ,],
    ["4", ,],
    ["5", 15, 25, 23, 19, 20, 30],
    ["6", 2, 9],
    ["7", 2, 9],
    ["8", ,],
    ["9", ,],
    ["10"],
    ["11"],
    ["12"],
  ],
  price: 4000000,
  discountPr: 10,
  discount: [
    ["1", , ,],
    ["2", , ,],
    ["3", , ,],
    ["4", , ,],
    ["5", 29, 29, 30],
    ["6", , , 30, 31],
    ["7", , , 30],
    ["8", , ,],
    ["9", , ,],
    ["10", , ,],
    ["11", , ,],
    ["12", , ,],
  ],
  incPrice: 3700000,
  specialIncPrice: [
    ["1", 1, 17, 8000000],
    ["2", , ,],
    ["3", , ,],
    ["4", , ,],
    ["5", , , 4800000],
    ["6", , , 4000000],
    ["7", , , 5000000],
    ["8", , ,],
    ["9", , ,],
    ["10", , ,],
    ["11", , ,],
    ["12", , ,],
  ],
  villa: {
    name: "ویلا لاکوده ",
    about:
      "ویلا در شهر چالوس واقع شده است. اقامتگاه در محیطی آرام شهرکی و غیر بومی واقع است. شهرک دارای نگهبان است. ویلا دربست است. بافت محله ویلا ساحلی و مسیر دسترسی به اقامتگاه آسفالت می باشد. وضعیت آنتن دهی همراه اول، ایرانسل و رایتل عالی می باشد. فاصله با پمپ بنزین 20 دقیقه ، سوپر مارکت 5 دقیقه پیاده و نانوایی 5 دقیقه با ماشین است. اقامتگاه قبل از ورود مهمان بطور کامل نظافت خواهد شد.",
    options: [
      { name: "بیلیارد", icon: <RiBilliardsFill /> },
      { name: "استخر", icon: <LiaSwimmingPoolSolid /> },
      { name: "شاه نشین", icon: <GiThroneKing /> },

      // { name: "wifi", icon: <FaWifi /> },
      { name: "رو به دریا", icon: <PiSunHorizonBold /> },

      { name: "z", icon: <FaWifi /> },
    ],
    ditails: {
      tagh: "",
      dar: "دربست",
      mt: "450",
      valency: "10",
      sleep: {
        room: 5,
        twoBed: 5,
        oneBed: "فاقد",
      },
      wc: {
        hamam: "6",
        irani: "1",
        farangi: "5",
      },
    },
    mainImg: "https://s6.uupload.ir/files/4-1_zhb.png",
    secindImg0: [
      "https://s6.uupload.ir/files/77_lly.jpg",
      "https://s6.uupload.ir/files/4-0_32wi.png",
      "https://s6.uupload.ir/files/4-1_98vi.png",
      "https://s6.uupload.ir/files/4-1-1_9ssv.png",
      "https://s6.uupload.ir/files/4-2_c6vf.png",
      "https://s6.uupload.ir/files/4-3_66th.png",
      "https://s6.uupload.ir/files/4-4_845s.png",
      "https://s6.uupload.ir/files/4-5_71pv.png",
      "https://s6.uupload.ir/files/4-6_jeqp.png",
      "https://s6.uupload.ir/files/4-7_hd6f.png",
      "https://s6.uupload.ir/files/4-8_0i5y.png",
      "https://s6.uupload.ir/files/4-9_cp6q.png",
      "https://s6.uupload.ir/files/4-10_ktjw.png",
      "https://s6.uupload.ir/files/4-11_1v7q.png",
      "https://s6.uupload.ir/files/4-0_dcm3.png",
      "https://s6.uupload.ir/files/4-13_8dsa.png",
      "https://s6.uupload.ir/files/4-12_c4dw.png",
    ],
    optionsRefa: [
      { name: "منظره به حیاط", icon: <BiHomeCircle /> },
      { name: "میز ناهار خوری", icon: <MdOutlineTableBar /> },
      { name: "تلویزیون", icon: <FaDesktop /> },
      { name: "منظره به دریا", icon: <PiSunHorizonBold /> },

      { name: "گاز", icon: <MdOutlineGasMeter /> },
      { name: "برق", icon: <MdOutlinePower /> },
      { name: "آب", icon: <GiTap /> },

      { name: "مبلمان", icon: <LuSofa /> },
      { name: "جاروبرقی", icon: <GiVacuumCleaner /> },
      { name: "کمد/داور", icon: <PiHardDrives /> },
    ],
    optionsWC: [
      { name: "حمام", icon: <MdOutlineBathtub /> },
      { name: "سرویس ایرانی", icon: <PiToiletPaperDuotone /> },

      { name: " سرویس فرنگی", icon: <PiToiletDuotone /> },
    ],
    optionsREfa2: [
      { name: "پارکینگ", icon: <RiParkingBoxLine /> },
      { name: "سم پاشی دوره ای", icon: <PiBugBeetleDuotone /> },
    ],
    optionsSecurity: [
      { name: " نگهبان", icon: <GiSecurityGate /> },
      { name: " دوربین مدار بسته", icon: <GiCctvCamera /> },
    ],
    optionsColl: [
      { name: "کولر گازی", icon: <GiComputerFan /> },
      { name: "رادیاتور", icon: <FaDumpsterFire /> },
      { name: "پنکه سقفی", icon: <PiFanBold /> },
      { name: "بخاری", icon: <LiaDumpsterFireSolid /> },
      ,
    ],
    optionsTaf: [
      { name: "بیلیارد", icon: <RiBilliardsFill /> },
      { name: "استخر", icon: <LiaSwimmingPoolSolid /> },
      // { name: "wifi", icon: <FaWifi /> },
      // { name: "فوتبال دستی", icon: <BiFootball /> },
      { name: "شاه نشین", icon: <GiThroneKing /> },

      // { name: "ایر هاکی", icon: <GiHockey /> },
    ],
    optioanKitch: [
      { name: "آشپزخانه", icon: <MdOutlineSoupKitchen /> },
      { name: "لوازم سرو غذا", icon: <GiForkKnifeSpoon /> },
      { name: "ماشین لباس شویی", icon: <MdOutlineLocalLaundryService /> },
      { name: "یخچال", icon: <MdOutlineKitchen /> },
    ],
  },
};
// console
const VillaPagee = () => {
  const optionsY = {
    year: "numeric",
  };

  let nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  const [year, setyear] = useState(nowYear);
  let id = useHistory()?.location.state.id;
  let priceToday = useHistory()?.location.state.priceToday;
  const [villaInf, setvillaInf] = useState();
  useEffect(() => {
    axios.get(`https://localhost:7103/api/Villa/Get?Id=${id}`).then((res) => {
      setvillaInf(res.data.data);
    });
  }, []);

  const [img, setImg] = useState([
    false,
    "",
    [...data1.villa.secindImg0, data1.villa.mainImg],
  ]);
  const optionsD = {
    day: "numeric",
  };
  const optionsMnum = {
    month: "numeric",
  };
  const nowMnum = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsMnum);
  let seletedDays = [];
  let seletedDaysOnCal=[];
  const [rangeDays, setRangeDays] = useState({
    f: "",
    s: "",
    y: "",
    m: nowMnum,
  });
  const [daysPrice, setDayPrice] = useState([]);
  const daysdis = [];
  // console.log(daysdis);
  useEffect(() => {
    rangeDays.f !== "" &&
      rangeDays.m !== "" &&
      axios({
        method: "post",
        url: `https://localhost:7103/api/Reservation/GetPricedDays?villaId=${id}&month=${rangeDays.m}&year=${year}`,
      }).then(function (response) {
        setDayPrice(response.data.data);
      });
  }, [rangeDays]);

  if (rangeDays.f !== "" && rangeDays.s !== "") {
    for (
      let i = parseInt(rangeDays.f.shamsiDate.split("/")[2]);
      i < parseInt(rangeDays.s.shamsiDate.split("/")[2]);
      i++
    ) {
      let index = daysPrice.findIndex(
        (d) => parseInt(d.shamsiDate.split("/")[2]) == i 
      );
      // console.log(daysPrice[index]?.price);
      if(daysPrice[index]?.isPriced){
        seletedDays.push(daysPrice[index]?.price);
        daysdis.push(daysPrice[index]?.disscount);
        seletedDaysOnCal.push(parseInt(daysPrice[index]?.shamsiDate.split("/")[2]))
      }
    }
  }
  const [state, setState] = useState(true);
  const [reservsDays, setreservsDays] = useState({ f: "", s: "" });
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };


  return (
    villaInf?.images[0] && (
      <div className={`bg-screenColor dark:text-white `}>
        <div className={`fixed z-[50] bg-opacity-  ${!img[0] && "hidden"} `}>
          <div
            onClick={() => setImg([false, img[1], img[2]])}
            className="z-[58] absolute text-white m-4 bg-white bg-opacity-20 cursor-pointer backdrop-blur-sm p-3 rounded-2xl "
          >
            <IoMdClose className="text-[33px]" />
          </div>
          <div className="z-[55] absolute w-[100vw] h-screen flex flex-col justify-center  ">
            <div className="">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-navigation-size": "40px",
                  "--swiper-pagination-color": "#fff",
                }}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={`  flex justify-center  `}
              >
                <SwiperSlide>
                  <div className="px-8 self-center justify-center max-h-[80vh] y9:h-[80vh]   x:max-w-[58vw]  flex dark:bg-transparent  text-textDark rounded-3xl ">
                    <img src={img[1]} alt="" className="rounded-3xl" />
                  </div>
                </SwiperSlide>
                {img[2]
                  ?.filter((v) => v !== img[1])
                  .map((item) => (
                    <SwiperSlide key={item}>
                      <div className="px-8 self-center justify-center max-h-[80vh] y9:h-[80vh]   x:max-w-[58vw]  flex dark:bg-transparent  text-textDark rounded-3xl ">
                        <img src={item} alt="" className="rounded-3xl" />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div
            onClick={() => setImg([false, img[1], img[2]])}
            className="z-[52] fixed  top-0 bg-opacity-80 backdrop-blur-sm bg-secondColorDark w-screen h-screen  "
          ></div>
        </div>
        {/* <div className="relative  z-[5] flex justify-center py-5 lg:hidden ">
          <Link href={"/"}>
            <img src="/q.png" alt="img" />
          </Link>
        </div>
        <Navigationn /> */}

        <div>
          <div className="flex flex-col-reverse lg:flex-row  lg:justify-between  px-5 md:px-10 xl:p-20 pb-0">
            <div className="lg:w-[50vw]">
              <div className="">
                <p className="faNumber text-[24px] font-bold">
                  {villaInf.name} {villaInf.id}{" "}
                </p>
                <p className="faNumber text-sm font-semibold text-gray-400 mx-4 ">
                  ویلا {JSON.parse(villaInf.roomCount)[0]}خواب تا ظرفیت{" "}
                  {JSON.parse(villaInf.roomCount)[5]} نفر{" "}
                </p>{" "}
                <div className="mt-4 mx-3">
                  شروع قیمت از
                  <br />
                  <div className="flex gap-2">
                    <div className="text-[17px] flex text-gray-400 gap-3 font-bold ">
                      <div
                        className={`${
                          priceToday.disscount === 0 && "hidden"
                        } flex line-through self-center `}
                      >
                        {priceToday.price.toLocaleString()}
                        <div className="relative font-semibold text-sm mr-1 self-start mt-1">
                          <p>توما</p>
                          <div className="absolute -top-3 right-3 ">
                            <p>ن</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${
                          priceToday?.disscount === 0 && "hidden"
                        } faNumber w-[120px] flex text-white text-center pt-1  px-1 bg-blue-500  self-  rounded-xl text- font-semibold`}
                      >
                        <p>
                          {parseInt(
                            priceToday?.disscount?.toString().slice(0, -3)
                          ).toLocaleString()}
                        </p>
                        <span className="text-[12px] self-start pr-1">
                          هزار تومان تخفیف
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="flex mt-3 mr-2">
                    <p className="font-bold flex text-[23px] faNumber ">
                      {(
                        priceToday?.price - priceToday?.disscount
                      ).toLocaleString()}
                    </p>
                    <div className="relative font-semibold text-sm mr-1 self-start mt-2">
                      <p>توما</p>
                      <div className="absolute -top-3 right-3 ">
                        <p>ن</p>
                      </div>
                    </div>
                    <p className="self-center mx-3 ">/ هرشب</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:w-[480px]">
                <p className="opacity-50  font-bold">مشخصات ویلا :</p>
                <div className="flex lg:gap-10">
                  <div className="flex  mt-2md:w-[250px] w-[180px] ">
                    <div lassName="self-center pt-2 ">
                      <GoHomeFill className="text-blue-500 self-center mt-2 mx-2  text-[25px]" />
                    </div>
                    <div lassName="self-center">
                      <p>درباره ویلا</p>
                      <div className="flex opacity-50 text-sm font-bold">
                        {villaInf.size}
                        متر زیربنا .دربست
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 md:w-[250px] w-[180px]">
                    <div lassName="self-center pt-2">
                      <BsFillPeopleFill className="self-center text-blue-500 mt-2 mx-2 text-[23px]" />
                    </div>
                    <div lassName="self-center">
                      <p> ظرفیت</p>
                      <div className="flex opacity-50 text-sm font-bold">
                        ظرفیت تا {JSON.parse(villaInf.roomCount)[5]}نفر
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex lg:gap-10">
                  <div className="flex mt-2md:w-[250px] w-[180px]  ">
                    <div lassName="self-center pt-4 ">
                      <FaBed className="self-center text-blue-500 mt-4 mx-2 text-[25px]" />
                    </div>
                    <div lassName="self-center">
                      <p> سرویس های خواب</p>
                      <div className="flex opacity-50 text-sm font-bold">
                        {JSON.parse(villaInf.roomCount)[0]} اتاق خواب .
                        {JSON.parse(villaInf.roomCount)[6]} تخت دو نفره .
                        {JSON.parse(villaInf.roomCount)[1]} تخت یک نفره
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 md:w-[250px] w-[180px]">
                    <div lassName="self-center pt-2">
                      <FaBath className="self-center text-blue-500 mt-2 mx-2 text-[25px]" />
                    </div>
                    <div lassName="self-center">
                      <p> سرویس های بهداشتی</p>
                      <div className="flex opacity-50 text-sm font-bold">
                        {JSON.parse(villaInf.roomCount)[2]}حمام .
                        {JSON.parse(villaInf.roomCount)[3]} سرویس ایرانی .
                        {JSON.parse(villaInf.roomCount)[4]} سرویس فرنگی{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:w-[480px]">
                <p className="opacity-50  font-bold">توضیحات :</p>
                {villaInf.description}
              </div>
              <div className="mt-10 lg:w-[480px] dark:bg-border dark:bg-opacity-60 dark:border-0 border rounded-3xl p-5 font-bold">
                <p className="text-[18px]">
                  برای رزرو و هماهنگی با این شماره تماس بگیرید
                </p>
                <div className="faNumber flex justify-between">
                  <p>پاسخگوی 24ساعته</p>
                  <a href="tel:09134260356">
                    <p className="faNumber gap-2 flex text-[24px]">
                      <p>0356</p>
                      <p>426</p>
                      <p>0913</p>
                    </p>
                  </a>
                </div>
              </div>

              <div className="w-full dark:bg-border dark:bg-opacity-60 dark:border-0  lg:w-[480px] mt-10 self-center border pt-4  rounded-2xl ">
                <p className="opacity-70 px-2   font-bold">امکانات :</p>
                <div className="flex gap-7 md:gap-10 justify-center px-2 ">
                  <div className="flex justify-around  flex-wrap gap-7 md:gap-10">
                    <div className="min-w-[125px]  my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        امکانات رفاهی
                      </p>
                      <div>
                        <div className="mt-2 ">
                          {data1.villa.optionsRefa.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px] font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[125px] my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        امکانات آشپزخانه
                      </p>
                      <div>
                        <div className="mt-2 mb-8">
                          {data1.villa.optioanKitch.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px]  font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[125px] my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        سرمایشی گرمایشی
                      </p>
                      <div>
                        <div className="mt-2 ">
                          {data1.villa.optionsColl.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px]  font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[125px] my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        خدمات رفاهی
                      </p>
                      <div>
                        <div className="mt-2 ">
                          {data1.villa.optionsREfa2?.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px]  font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-[125px] my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        موارد ایمنی
                      </p>
                      <div>
                        <div className="mt-2 ">
                          {data1.villa.optionsSecurity.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px]  font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[125px] my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        امکانات تفریحی
                      </p>
                      <div>
                        <div className="mt-2 ">
                          {data1.villa.optionsTaf.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px]  font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-[125px] my-3 ">
                      <p className="opacity-60 font-bold text-sm">
                        سرویس بهداشتی
                      </p>
                      <div>
                        <div className="mt-2 ">
                          {data1.villa.optionsWC.map((o) => (
                            <div
                              key={o.name}
                              className="flex text-[15px]  font-bold "
                            >
                              <div className="self-center mx-2 text-[19px] ">
                                {o.icon}
                              </div>
                              <p>{o.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-10">
              <div className="w-[95vw] self-center flex  md:w-[80vw]  lg:w-[43vw] xl:w-[48vw] ">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "40px",
                    "--swiper-pagination-color": "#fff",
                  }}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className={` h-[260px] md:h-[350px] rounded-3xl x:h-[50vh] max-w-[700px] x:max-w-[58vw] flex  `}
                >
                  {/* <SwiperSlide>
                    <div
                      onClick={() => setImg([true, data1.villa.mainImg, img[2]])}
                      className=" h-[270px] cursor-pointer flex justify-center md:h-[350px] x:h-[50vh] max-w-[700px] x:max-w-[58vw] flex dark:bg-transparent  bg-black bg-opacity-70 text-textDark rounded-3xl "
                    >
                      <img
                        src={`https://localhost:7103/api/Villa/GetImage?imageName=${villaInf?.images[0]?.imageName}`}
                        alt=""
                        className="rounded-3xl"
                      />
                    </div>
                  </SwiperSlide> */}

                  {villaInf?.images?.map((item) => (
                    <SwiperSlide key={item}>
                      <div
                        onClick={() =>
                          setImg([
                            true,
                            `https://localhost:7103/api/Villa/GetImage?imageName=${item?.imageName}`,
                            img[2],
                          ])
                        }
                        className=" h-[270px] cursor-pointer flex justify-center md:h-[350px] x:h-[50vh] max-w-[700px] x:max-w-[58vw] flex dark:bg-transparent  bg-black bg-opacity-70 text-textDark rounded-3xl "
                      >
                        <img
                          src={`https://localhost:7103/api/Villa/GetImage?imageName=${item?.imageName}`}
                          alt=""
                          className="rounded-3xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex justify-center  gap-3 xl:gap-5 mt-3 xl:mt-5  lg:w-[48vw] ">
                <img
                  onClick={() =>
                    setImg([true, data1.villa.secindImg0[0], img[2]])
                  }
                  src={`https://localhost:7103/api/Villa/GetImage?imageName=${villaInf?.images[1]?.imageName}`}
                  alt=""
                  className="rounded-3xl w-[47vw] cursor-pointer h-[150px] sm:h-[160px] md:h-[170px] lg:h-[182px] sm:w-[48vw] md:w-[35vw] lg:w-[21vw] xl:w-[24vw]"
                />

                <img
                  onClick={() =>
                    setImg([true, data1.villa.secindImg0[1], img[2]])
                  }
                  src={`https://localhost:7103/api/Villa/GetImage?imageName=${villaInf?.images[2]?.imageName}`}
                  alt=""
                  className="rounded-3xl w-[42vw] cursor-pointer h-[150px] lg:h-[182px] sm:h-[160px] md:h-[170px]  md:w-[35vw] lg:w-[21vw] xl:w-[24vw]"
                />
              </div>
              {/* <div className=" w-[90vw] md:w-[80vw]  lg:w-[43vw] xl:w-[48vw] text-center bg-white rounded-3xl mt-5   self-center pt-4">
                <p className=" text-sm">
                  برای دریافت لوکیشن روی اپلیکشن مورد نظر کلیک کنید
                </p>
                <div className="flex justify-center  ">
                  <div className=" flex text-center lg:gap-7 gap-5 justify-between">
                    <div className="  ">
                      <a href="https://nshn.ir/_bfBy1Qxixvj">
                        <img
                          src={"/neshan.png"}
                          alt="مسیر یابی لاکوده با نشان"
                          className="w-[50px] pt-3"
                        />
                        <p>نشان</p>
                      </a>
                    </div>
                    <div>
                      <a href="https://goo.gl/maps/NiHHqYqPnb6WKmu8A">
                        <img
                          src={"/google.png"}
                          alt="مسیر یابی لاکوده با گوگل مپ"
                          className="w-[75px]  pt-3 "
                        />
                        <p>گوگل مپ</p>
                      </a>
                    </div>
                    <div>
                      <a href="https://balad.ir/#18.98/36.6854501/51.4188642">
                        <img
                          src={"/balad.png"}
                          alt="مسیر یابی لاکوده با بلد"
                          className="w-[43px] mt-5 rounded-lg"
                        />
  
                        <p className="mb-[2px]">بلد</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="flex my-10 lg:flex-row flex-col justify-center mb-20">
            <div className="flex my-10 justify-center">
              <div className="w-[350px] h-[430px]  dark:border-0  border rounded-3xl p-5 bg-white dark:bg-border dark:bg-opacity-60">
                <p>تاریح مورد نظر را روی تقویم انتخاب کنید</p>
                <div className="border dark:bg-border dark:bg-opacity dark:border-0  rounded-xl">
                  <div className="flex mt-3 p-5 justify-between">
                    <div className="w-[134px] border-l">
                      <div>تاریخ ورود</div>{" "}
                      <div className="text-btn">
                        {rangeDays.f !== ""
                          ? new Date(
                              rangeDays.f.date.split("T")[0]
                            ).toLocaleDateString("fa-IR-u-nu-latn", option)
                          : "روی تقویم انتخاب کنید"}
                      </div>
                    </div>
                    <div>
                      <div className="pr-4">تاریخ خروج</div>{" "}
                      <div className="text-btn pr-3">
                        {rangeDays.s !== ""
                          ? new Date(
                              rangeDays.s.date.split("T")[0]
                            ).toLocaleDateString("fa-IR-u-nu-latn", option)
                          : "روی تقویم انتخاب کنید"}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cursor-pointer mt-5 h-10 flex text-sm border border-btn self-center  rounded-xl  text-white">
                    <input
                      dir="ltr"
                      placeholder="کد تخفیف"
                      type="text"
                      className="rounded-r-xl w-full dark:bg-transparent px-5"
                    />
                    <div className="px-3 bg-btn py-2  hover:bg-blue-800 rounded-l-xl">
                      ثبت
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm">
                  شرایط و قوانین لاکوده را مطالعه و میپذیرم
                  </p>
                </div>
                <div className="mt-1 bg-btn text-white rounded-2xl text-center py-5 cursor-pointer ">
                  رزرو و انتقال به درگاه بانکی
                </div>
                <div className="border-b ">
                  <div className="flex justify-between text-sm pt-4 py-2">
                    <p> {seletedDays.length} شب اقامت </p>
                    <p>
                      {seletedDays
                        .reduce((partialSum, a) => partialSum + a, 0)
                        .toLocaleString()}{" "}
                      تومان
                    </p>
                  </div>

                  <div className="flex justify-between text-sm  pb-2">
                    <p> مقدار تخفیف</p>
                    <p>
                      {daysdis
                        .reduce((partialSum, a) => partialSum + a, 0)
                        .toLocaleString()}{" "}
                      تومان
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <p>جمع مبلغ قابل پرداخت</p>
                  <p>
                    {parseInt(
                      seletedDays.reduce((partialSum, a) => partialSum + a, 0) -
                        daysdis.reduce((partialSum, a) => partialSum + a, 0)
                    ).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
              </div>
            </div>
            <Calandre2
              villaa={villaInf?.id}
              seletedDays={seletedDays}
              setRangeDays={setRangeDays}
              rangeDays={rangeDays}
              state={state}
              setreservsDays={setreservsDays}
              setState={setState}
              year={year}
              setyear={setyear}
              seletedDaysOnCal={seletedDaysOnCal}

            />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    )
  );
};

export default withRouter(VillaPagee);
