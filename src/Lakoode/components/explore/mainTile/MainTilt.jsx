import { Tilt } from "react-tilt";
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
import { useGetvillalistQuery } from "../../../redux/services/movieDatabase";

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

const MainTilt = ({ priceRange, selectetOpt, priceRoom }) => {
  const { data, isFetching, isLoading, error } = useGetvillalistQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  console.log(data?.data)
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
//   const filrered = villas.filter((v) => {
//     return (
//       v.price <= priceRange[1] &&
//       priceRange[0] <= v.price &&
//       priceRoom.find(
//         (r) => r == v.villa.ditails.sleep.room || priceRoom === ""
//       ) &&
//       v.villa.options.some((ai) => selectetOpt.includes(ai.name))
//     );
//   });
const tafREf = [
  { title: "بیلیارد", id: 24 },
  { title: "استخر", id: 25 },
  { title: "شاه نشین", id: 26 },
];
  return (
    <div
      id="about-me"
      className="dark:text-white text-[16px] relative mt-36 -top-24  md:top-0 "
    >
      <div className="flex justify-center">
        {/* {filrered.length === 0 ? (
          <p className="text-[20px] mt-0 lg:my-16">
            ویلایی با توجه فیلتر شما یافت نشد:(
          </p>
        ) : (
          <p className="">ویلای مورد نظر را انتخاب کنید!</p>
        )} */}
      </div>
      <div className="flex justify-center ">
        <div className="flex  bg-opacity-50 w-[100vw] md:w-[90vw] flex-col justify-between rounded-3xl">
          <div className="flex justify-center ">
            <div
              id="skills"
              className={`md:mx-16  duration-500  rounded-3xl z-[5] w-[80vw] lg:w-[80vw] max-w-[1040px]   grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center`}
            >
              {data?.data?.length === 0 ? (
                <div className="text-center w-full"></div>
              ) : (
                data?.data?.map((villa, index) => (
                  <Link to={{ pathname: `/villapage/${villa.id}`, state: {id:villa.id} }}>
                  <Tilt key={index} options={defaultOptions}>
                      <div
                        className={` bg-white dark:backdrop-blur-sm dark:text-white dark:bg-border dark:bg-opacity-50  dark:border-0 dark:border-border border my-4 cursor-pointer w-[80vw] sm:w-[330px] sm:h-[400px] rounded-3xl shadow-2xl  md:m-5 flex flex-col justify-between`}
                      >
                        <div>
                          <div className="relative">
                            <img
                              className="rounded-t-3xl w-full h-[220px]"
                              src={`https://localhost:7103/api/Villa/GetImage?imageName=${villa.images[0].imageName}`}
                              alt="لاکوده"
                            />
                            <div
                              className={`${
                                villa.discountPr === "" && "hidden"
                              } absolute top-2 right-2 text-white  bg-blue-500 px-2 rounded-xl text-sm font-semibold py-1`}
                            >
                              تخفیف ویژه
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-bold mx-4 mt-3">
                              <p className="text-[18px]">
                                {villa.name}{" "}
                              </p>
                              <p>ID : {villa.id} </p>
                            </div>
                            <ul className="flex mx-2">
                              {JSON.parse(villa.villaFacilities).map((opt, index) => (
                                <li
                                  key={index}
                                  className={`${
                                   ( opt>26 || opt<24 )&& "hidden"
                                  }  text-blue-500 dark:text-white dark:bg-btn dark:bg-opacity-60 dark:border-0 border-blue-500 flex mx-1 flex-col justify-center border rounded-xl w-[45px]  cursor-pointer h-[45px]  my-1 `}
                                >
                                  <div className="flex justify-center text-[16px]">
                                    {tafREf[tafREf.findIndex(v=>v.id===opt)]?.title}
                                  </div>
                                  <p className="text-center text-[10px] font-semibold">
                                  {tafREf[tafREf.findIndex(v=>v.id===opt)]?.title}
                                  </p>
                                </li>
                              ))}
                            </ul>
                            <p className="faNumber text-sm font-semibold text-gray-400 mx-4 ">
                              ویلا {villa.roomCount[0]}خواب تا
                              ظرفیت {villa.roomCount[5]} نفر{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex mx-4 mb-2 py-3 justify-between text-blue-5 ">
                          <div className="flex flex-col">
                            <p className="text-gray-700 dark:text-textPlight text-sm">
                              شروع قیمت هر شب :{" "}
                            </p>
                            <div
                              className={`${
                                villa.discountPr === "" && "hidden"
                              } faNumber w-[50px] text-white text-center pt-1 flex flex-col justify- bg-blue-500 px-2  self-  rounded-xl text- font-semibold`}
                            >
                              {/* {villa.discountPr}% */}
                              200-
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="flex flex-col   ">
                              <p className="font-bold text-[20px] faNumber ">
                                {/* {(
                                  (villa.price * (100 - villa.discountPr)) /
                                  100
                                ).toLocaleString()} */}400000
                              </p>
                              <div className="w-full">
                                <div className="flex justify-between ">
                                  <p
                                    className={`${
                                      villa.discountPr === "" && "hidden"
                                    } faNumber font-bold text-sm self-center line-through mr-2 text-gray-400`}
                                  >
                                    {/* {villa.price.toLocaleString()} */}400000
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="relative font-semibold text-sm mr-1 self-start mt-2">
                              <p>توما</p>
                              <div className="absolute -top-3 right-3 ">
                                <p>ن</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </Link>
                ))
              )}
            </div>
          </div>
          {/* <div className="flex justify-center pt-5 pb-3 w-full">
            <div
              onClick={() => setww(ww === 9 ? 3 : 9)}
              className={`${
                ww === 9 && "rotate-180"
              } rounded-[50%]  bg-btn flex justify-center  text-white self-center mb-3 cursor-pointer w-[50px] h-[50px] hover:h-[55px] duration-150 hover:w-[55px] `}
            >
              <BsArrowDown className="self-center text-[22px] duration-75 hover:text-[25px]" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainTilt;
