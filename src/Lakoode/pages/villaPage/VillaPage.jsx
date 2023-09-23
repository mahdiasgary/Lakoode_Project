// import Navigationn from "../components/Navigation";
import balad from "../../assets/balad.png";
import neshan from "../../assets/neshan.png";
import google from "../../assets/google.png";
import { FaBath, FaBed } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import Calandre2 from "./Calandre2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { optiona } from "../../constans/options";
import Foter from "../Foter";
import Navbar from "../../components/navbar/Navbar";
import { toast } from "react-toastify";
import { useStateContext } from "../../contextProvider/ContextProvider";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const VillaPagee = () => {
  const optionsY = {
    year: "numeric",
  };
  const [loadingButton, setLoadingButton] = useState(false);
const{loginStatus}=useStateContext()
  let nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  const [year, setyear] = useState(nowYear);
  let id = useHistory()?.location.state.id;
  let priceToday = useHistory()?.location.state.priceToday;
  const [villaInf, setvillaInf] = useState();
  useEffect(() => {
    axios
      .get(`https://api.lakoode.ir/api/Home/GetVilla?Id=${id}`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      })
      .then((res) => {
        setvillaInf(res.data.data);
      });
  }, []);
  const [img, setImg] = useState([false, "", villaInf]);
  const optionsD = {
    day: "numeric",
  };
  const optionsMnum = {
    month: "numeric",
  };
  const nowMnum = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsMnum);
  let seletedDays = [];
  let seletedDaysOnCal = [];
  const [rangeDays, setRangeDays] = useState({
    f: "",
    s: "",
    y: "",
    m: nowMnum,
  });
  const [daysPrice, setDayPrice] = useState([]);
  const [daysPrice2, setDayPrice2] = useState([]);

  const daysdis = [];
  useEffect(() => {
    if (rangeDays.f !== "" && rangeDays.s !== "") {
      axios({
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
        method: "post",
        url: `https://api.lakoode.ir/api/Home/GetCalender?villaId=${id}&month=${
          rangeDays.f.shamsiDate?.split("/")[1]
        }&year=${rangeDays.f.shamsiDate?.split("/")[0]}`,
      }).then(function (response) {
        setDayPrice(response.data.data);
      });
      if (
        rangeDays.f.shamsiDate?.split("/")[1] !==
        rangeDays.s.shamsiDate?.split("/")[1]
      ) {
        axios({
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          method: "post",
          url: `https://api.lakoode.ir/api/Home/GetCalender?villaId=${id}&month=${
            rangeDays.s.shamsiDate?.split("/")[1]
          }&year=${rangeDays.s.shamsiDate?.split("/")[0]}`,
        }).then(function (response) {
          setDayPrice2(response.data.data);
        });
      }
    }
  }, [rangeDays]);

  if (rangeDays.f !== "" && rangeDays.s !== "") {
    function dateRange(startDate, endDate, steps = 1) {
      const dateArray = [];
      let currentDate = new Date(startDate);
      while (currentDate < new Date(endDate)) {
        let index = daysPrice
          .concat(daysPrice2)
          .findIndex(
            (d) =>
              d.date?.split("T")[0] ==
              new Date(currentDate).toISOString().split("T")[0]
          );

        if (
          daysPrice.concat(daysPrice2)[index]?.isPriced === false ||
          daysPrice.concat(daysPrice2)[index]?.isReserved
        ) {
          setRangeDays({ f: "", s: "", m: "", y: "" });
        }

        if (daysPrice.concat(daysPrice2)[index]?.isPriced) {
          seletedDays.push(daysPrice.concat(daysPrice2)[index]?.price);
          daysdis.push(daysPrice.concat(daysPrice2)[index]?.disscount);
          seletedDaysOnCal.push(
            new Date(currentDate).toISOString().split("T")[0]
          );
        }

        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
      }
      return dateArray;
    }

    const dates = dateRange(
      rangeDays.f.date?.split("T")[0],
      rangeDays.s.date?.split("T")[0]
    );
  }
  const [state, setState] = useState(true);
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const position = [36.685357408400314, 51.41840014662684];
  // const [loginStatus[0], setloginStatus[0]] = useState(false);

  const [ISdisss, setISDis] = useState([false, ""]);
  const [disss, setDis] = useState("");
  useEffect(() => {
    setISDis([false, ""]);
  }, [rangeDays]);
  const dissHand = () => {
    const formData = new FormData();
    formData.append("StartDay", parseInt(rangeDays.f.shamsiDate.split("/")[2]));
    formData.append(
      "StartMonth",
      parseInt(rangeDays.f.shamsiDate.split("/")[1])
    );
    formData.append(
      "StartYear",
      parseInt(rangeDays.f.shamsiDate.split("/")[0])
    );
    formData.append("EndDay", parseInt(rangeDays.s.shamsiDate.split("/")[2]));
    formData.append("EndMonth", parseInt(rangeDays.s.shamsiDate.split("/")[1]));
    formData.append("EndYear", parseInt(rangeDays.s.shamsiDate.split("/")[0]));
    formData.append("DisscountCode", disss);
    formData.append("VillaId", parseInt(villaInf.id));
    // formData.append("Mobile",'09201413045');

    axios({
      method: "post",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
      url: "https://api.lakoode.ir/api/Home/CheckDisscount",
      data: formData,
    })
      .then(function (response) {
        if (response.data.isSuccessFull) {
          setISDis([true, response.data.data]);
          toast.success("کد تخفیف اعمال شد", {
            autoClose: 1100,
            position: "top-left",
          });
        }
        if (!response.data.isSuccessFull) {
          setISDis(true);
          toast.error("کد تخفیف نادرست است", {
            autoClose: 1100,
            position: "top-left",
          });
        }
        // window.location.reload();
      })
      .catch(function (response) {
        toast.error(` ${".مجددا تلاش نمایید"}`, {
          autoClose: 1100,
          position: "top-left",
        });
      });
  };
  const [show, setshow] = useState(false);
  const [code, setcode] = useState(false);
  const [corat, setcorat] = useState(false);

  const submitHand = () => {
    setLoadingButton(true);

    const formData = new FormData();
    formData.append("StartDay", parseInt(rangeDays.f.shamsiDate.split("/")[2]));
    formData.append(
      "StartMonth",
      parseInt(rangeDays.f.shamsiDate.split("/")[1])
    );
    formData.append(
      "StartYear",
      parseInt(rangeDays.f.shamsiDate.split("/")[0])
    );
    formData.append("EndDay", parseInt(rangeDays.s.shamsiDate.split("/")[2]));
    formData.append("EndMonth", parseInt(rangeDays.s.shamsiDate.split("/")[1]));
    formData.append("EndYear", parseInt(rangeDays.s.shamsiDate.split("/")[0]));
    formData.append("DisscountCode", disss);
    formData.append("VillaId", parseInt(villaInf.id));

    axios({
      method: "post",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
      url: "https://api.lakoode.ir/api/Home/SubmitReservation",
      data: formData,
    })
      .then(function (response) {
        setLoadingButton(false);

        if (response.data.isSuccessFull) {
          setcode(response.data.data);
          setcorat(false);
          setshow(true);
          toast.success("رزرو اولیه برای شما میهمان عزیر ثبت شد", {
            autoClose: 1100,
            position: "top-left",
          });
        }
        if (!response.data.isSuccessFull) {
          setISDis(true);
          toast.error("ویلا در این تاریخ رزرو شده است ", {
            autoClose: 1100,
            position: "top-left",
          });
        }
      })
      .catch(function (response) {
        toast.error(` ${".مجددا تلاش نمایید"}`, {
          autoClose: 1100,
          position: "top-left",
        });
      });
  };
  const [check, setCheck] = useState(false);
  return (
    <div>
      {villaInf?.images[0] && (
        <div className={`bg-screenColor  dark:text-white `}>
          <div className="mb-10">
            <Navbar />
          </div>
          <div
            className={`fixed top-0 z-[70] bg-opacity-  ${
              !img[0] && "hidden"
            } `}
          >
            <div
              onClick={() => setImg([false, img[1], img[2]])}
              className="z-[58] absolute text-white m-4 bg-white bg-opacity-20 cursor-pointer backdrop-blur-sm p-3 rounded-2xl "
            >
              <IoMdClose className="text-[33px]" />
            </div>
            <div className="z-[55] absolute w-[100vw] h-screen flex flex-col justify-center  ">
              <div className="px-8 self-center justify-center   x:max-w-[58vw]  flex dark:bg-transparent  text-textDark rounded-3xl ">
                <img src={img[1]} alt="" className="rounded-3xl" />
              </div>
            </div>
            <div
              onClick={() => setImg([false, img[1], img[2]])}
              className="z-[52] fixed  top-0 bg-opacity-80 backdrop-blur-sm bg-secondColorDark w-screen h-screen  "
            ></div>
          </div>

          {/* <Navigation /> */}

          <div>
            <div className="flex flex-col-reverse lg:flex-row  lg:justify-between  px-5 md:px-10 xl:p-20 pb-0">
              <div className="lg:w-[50vw]">
                <div className="">
                  <div className="faNumber text-[24px] flex font-bold">
                    <p className="self-center">{villaInf.name}</p>
                    <div className="flex text-btn text-sm self-center mx-3">
                      <MdLocationOn />
                      <p>چالوس</p>
                    </div>
                  </div>
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
                            priceToday?.disscount === 0 && "hidden"
                          } flex line-through self-center `}
                        >
                          {priceToday?.price.toLocaleString()}
                          <div className="relative font-semibold text-sm mr-1 self-start mt-1">
                            <p>توما</p>
                            <div className="absolute -top-3 right-3 ">
                              <p>ن</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={` ${
                            priceToday?.disscount === 0 && "hidden"
                          } faNumber w-[120px] flex justify-center text-white text-center pt-1  px-1 bg-blue-500  self-  rounded-xl text- font-semibold`}
                        >
                          <p className="self-center  pr-2">
                            {parseInt(
                              priceToday?.disscount?.toString().slice(0, -3)
                            ).toLocaleString()}
                          </p>
                          <span className="text-[12px] self-center pr-1">
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
                <div className="mt-20 lg:w-[480px]">
                  <p className="opacity-50  font-bold">توضیحات :</p>
                  {villaInf.description}
                </div>
                {/* <div className="mt-10 lg:w-[480px] dark:bg-border dark:bg-opacity-60 dark:border-0 border rounded-3xl p-5 font-bold">
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
                  </div> */}

                <div
                  dir="ltr"
                  className="w-full max-h-[370px] scrollbar-thin dark:scrollbar-track-[#1c1d21] scrollbar-track-gray-300 dark:scrollbar-thumb-border scrollbar-thumb-gray-400 scrollbar-track-rounded-md   scrollbar-thumb-rounded-md  overflow-y-auto dark:bg-border dark:bg-opacity-60 dark:border-0  lg:w-[480px] mt-10 self-center border pt-4  rounded-2xl "
                >
                  <p className="opacity-70 px-2 text-end  font-bold">
                    {" "}
                    : امکانات{" "}
                  </p>
                  <div className="flex gap-7 md:gap-10 justify-center px-2 ">
                    <div className="flex justify-around  flex-wrap gap-7 md:gap-1">
                      <div className="w-[125px] my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          امکانات آشپزخانه
                        </p>
                        <div>
                          <div className="mt-2 mb-8">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    1 <= o && o <= 9
                                      ? "flex justify-end"
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-[125px] my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          سرمایشی گرمایشی
                        </p>
                        <div>
                          <div className="mt-2 ">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    31 <= o && o <= 35
                                      ? "flex justify-end"
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="w-[125px]  my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          امکانات رفاهی
                        </p>
                        <div>
                          <div className="mt-2 ">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    10 <= o && o <= 30
                                      ? "flex  justify-end "
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="w-[125px] my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          خدمات رفاهی
                        </p>
                        <div>
                          <div className="mt-2 ">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    36 <= o && o <= 45
                                      ? "flex justify-end"
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="w-[125px] my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          موارد ایمنی
                        </p>
                        <div>
                          <div className="mt-2 ">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    61 <= o && o <= 65
                                      ? "flex justify-end"
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-[125px] my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          امکانات تفریحی
                        </p>
                        <div>
                          <div className="mt-2 ">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    46 <= o && o <= 55
                                      ? "flex justify-end"
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-[125px] my-2 ">
                        <p className="opacity-60 font-bold text-end text-sm">
                          سرویس بهداشتی
                        </p>
                        <div>
                          <div className="mt-2 ">
                            {JSON.parse(villaInf?.villaFacilities).map(
                              (o, index) => (
                                <div
                                  key={index}
                                  className={` text-[15px] font-bold ${
                                    56 <= o && o <= 60
                                      ? "flex justify-end"
                                      : "hidden"
                                  } `}
                                >
                                  <p className="text-end">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.title
                                    }
                                  </p>
                                  <div className="self-center mx-2 text-[19px] ">
                                    {
                                      optiona[
                                        optiona.findIndex((w) => w.id === o)
                                      ]?.icon
                                    }
                                  </div>
                                </div>
                              )
                            )}
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
                    {villaInf?.images?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          onClick={() =>
                            setImg([
                              true,
                              `https://api.lakoode.ir/api/Home/GetImageInIndex?imageName=${item?.imageName}`,
                              img[2],
                            ])
                          }
                          className=" h-[270px] cursor-pointer flex justify-center md:h-[350px] x:h-[50vh] max-w-[700px] x:max-w-[58vw] flex dark:bg-transparent  bg-black bg-opacity-70 text-textDark rounded-3xl "
                        >
                          <img
                            src={`https://api.lakoode.ir/api/Home/GetImageInIndex?imageName=${item?.imageName}`}
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
                      setImg([
                        true,
                        `https://api.lakoode.ir/api/Home/GetImageInIndex?imageName=${villaInf?.images[1]?.imageName}`,
                        img[2],
                      ])
                    }
                    src={`https://api.lakoode.ir/api/Home/GetImageInIndex?imageName=${villaInf?.images[1]?.imageName}`}
                    alt=""
                    className="rounded-3xl w-[47vw] cursor-pointer h-[150px] sm:h-[160px] md:h-[170px] lg:h-[182px] sm:w-[48vw] md:w-[35vw] lg:w-[21vw] xl:w-[24vw]"
                  />

                  <img
                    onClick={() =>
                      setImg([
                        true,
                        `https://api.lakoode.ir/api/Home/GetImageInIndex?imageName=${villaInf?.images[2]?.imageName}`,
                        img[2],
                      ])
                    }
                    src={`https://api.lakoode.ir/api/Home/GetImageInIndex?imageName=${villaInf?.images[2]?.imageName}`}
                    alt=""
                    className="rounded-3xl w-[42vw] cursor-pointer h-[150px] lg:h-[182px] sm:h-[160px] md:h-[170px]  md:w-[35vw] lg:w-[21vw] xl:w-[24vw]"
                  />
                </div>
                <div className="flex justify-center w-[90vw] md:w-[80vw] lg:h-[200px] h-[200px]  lg:w-[43vw] xl:w-[48vw] text-center  dark:bg-border dark:bg-opacity-60 dark:border-0 rounded-3xl mt-5   self-center pt-4">
                  <div className="self-center">
                    <p className=" text-sm">
                      برای دریافت لوکیشن روی اپلیکشن مورد نظر کلیک کنید
                    </p>
                    <div className="flex justify-center  ">
                      <div className=" flex text-center lg:gap-7 gap-5 justify-between">
                        <div className="  ">
                          <a href="https://nshn.ir/_bfBy1Qxixvj">
                            <img
                              src={neshan}
                              alt="مسیر یابی لاکوده با نشان"
                              className="w-[50px] pt-3"
                            />
                            <p>نشان</p>
                          </a>
                        </div>
                        <div>
                          <a href="https://goo.gl/maps/NiHHqYqPnb6WKmu8A">
                            <img
                              src={google}
                              alt="مسیر یابی لاکوده با گوگل مپ"
                              className="w-[50px] pb-1 pt-3 "
                            />
                            <p>گوگل مپ</p>
                          </a>
                        </div>
                        <div>
                          <a href="https://balad.ir/#18.98/36.6854501/51.4188642">
                            <img
                              src={balad}
                              alt="مسیر یابی لاکوده با بلد"
                              className="w-[43px] pb-1 mt-5 rounded-lg"
                            />

                            <p className="mb-[2px]">بلد</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:px-0 px-4 z-0 hidden lg:flex overflow-hidden">
                  <MapContainer
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      height: "260px",
                    }}
                    center={position}
                    zoom={11}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={DefaultIcon} position={position}>
                      <Popup>مجتمع اقامتی لاکوده</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>

            <div className="flex my-10 lg:flex-row flex-col justify-center mb-20">
              <div className="flex  justify-center">
                <div className="w-[350px]   h-[480px]  dark:border-0  border rounded-3xl p-5 bg-white dark:bg-border dark:bg-opacity-60">
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
                    {ISdisss[0] ? (
                      <p className="text-sm text-btn bg-btn bg-opacity-20 rounded-xl mt-4 py-2 my-2 px-4">
                        {`                      کد تخفیف به مقدار ${(
                          parseInt(
                            seletedDays.reduce(
                              (partialSum, a) => partialSum + a,
                              0
                            ) -
                              daysdis.reduce(
                                (partialSum, a) => partialSum + a,
                                0
                              ) -
                              ISdisss[1]
                          ) / 1000
                        ).toLocaleString()}هزار تومان اعمال شد
    `}{" "}
                      </p>
                    ) : (
                      <div
                        className={` mt-5 h-10 flex text-sm  self-center  rounded-xl  text-white  `}
                      >
                        <input
                          disabled={
                            rangeDays.f === "" || (rangeDays.s === "" && true)
                          }
                          value={disss}
                          onChange={(e) => setDis(e.target.value)}
                          placeholder="کد تخفیف"
                          type="text"
                          className={`${
                            rangeDays.f === "" ||
                            (rangeDays.s === "" &&
                              "opacity-10 cursor-not-allowed")
                          }  rounded-r-xl border text-black dark:text-white border-btn outline-none w-full dark:bg-transparent px-5`}
                        />
                        <button
                          disabled={
                            rangeDays.f === "" || (rangeDays.s === "" && true)
                          }
                          onClick={dissHand}
                          className={` ${
                            rangeDays.f === "" || rangeDays.s === ""
                              ? "cursor-not-allowed"
                              : "hover:bg-blue-800"
                          }  px-3 self-center dark:text-white bg-btn h-10 flex flex-col justify-center   rounded-l-xl`}
                        >
                          اعمال
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex mt-5">
                    <p className="text-sm mb-3">
                      <Link to={"/lakooderoles"}>
                        <p className="text-btn font-semibold inline px-1">
                          شرایط و قوانین لاکوده{" "}
                        </p>
                      </Link>
                      را مطالعه کرده و میپذیرم
                    </p>

                    <input
                      disabled={
                        rangeDays.f === "" || (rangeDays.s === "" && true)
                      }
                      type="checkbox"
                      onChange={(e) => setCheck(e.target.checked)}
                      className="w-4 h-4 mt-[3px] mx-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  {villaInf.ipG_IsActive ? (
                    <div className="mt-1 mb-3 bg-btn text-white rounded-2xl text-center py-5 cursor-pointer ">
                      رزرو و انتقال به درگاه بانکی
                    </div>
                  ) : (
                    <button
                      disabled={
                        rangeDays.f === "" || (rangeDays.s === "" && true)
                      }
                      onClick={() => setcorat(true)}
                      className={`${
                        rangeDays.f === "" || rangeDays.s === "" || !check
                          ? "cursor-not-allowed bg-gray-500"
                          : "hover:bg-blue-800 bg-btn"
                      }   w-full mt-1 mb-3 font-semibold text-[18px]  duration-300  text-white rounded-2xl text-center py-5  `}
                    >
                      ثبت رزرو اولیه{" "}
                    </button>
                  )}
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
                        {ISdisss[0]
                          ? parseInt(
                              seletedDays.reduce(
                                (partialSum, a) => partialSum + a,
                                0
                              ) - ISdisss[1]
                            ).toLocaleString()
                          : daysdis
                              .reduce((partialSum, a) => partialSum + a, 0)
                              .toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <p>جمع مبلغ قابل پرداخت</p>
                    <p>
                      {ISdisss[0]
                        ? parseInt(ISdisss[1]).toLocaleString()
                        : parseInt(
                            seletedDays.reduce(
                              (partialSum, a) => partialSum + a,
                              0
                            ) -
                              daysdis.reduce(
                                (partialSum, a) => partialSum + a,
                                0
                              )
                          ).toLocaleString()}{" "}
                      تومان
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mt-4 lg:mt-0">
                <div className="relative">
                  <Calandre2
                    villaa={villaInf?.id}
                    seletedDays={seletedDays}
                    setRangeDays={setRangeDays}
                    rangeDays={rangeDays}
                    state={state}
                    setState={setState}
                    year={year}
                    setyear={setyear}
                    seletedDaysOnCal={seletedDaysOnCal}
                  />
                </div>
                <div
                  className={`${
                    loginStatus[0] && "hidden"
                  } text-white flex w-full justify-center h-[455px] lg:h-[500px] z-[3]  lg:w-[60vw]  top-0 lg:left-0 absolute`}
                >
                  <div className="w-full flex justify-center lg:mx-0 mx-3 bg-gray-700 bg-opacity-60 backdrop-blur-sm rounded-3xl">
                    <div className="self-center text-center ">
                      <p>
                        برای انتخاب تاریخ و رزرو باید وارد حساب کاربری خود شوید
                      </p>
                      <div>
                        <Link to={"/login"}>
                          <button className="px-6 py-2 mt-2 hover:bg-blue-700 duration-150 bg-btn text-center rounded-2xl">
                            ورود به حساب کاربری
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="px-4 relative z-[0] lg:hidden overflow-hidden">
                <MapContainer
                  style={{
                    width: "100%",
                    borderRadius: "25px",
                    height: "250px",
                  }}
                  center={position}
                  zoom={11}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker icon={DefaultIcon} position={position}>
                    <Popup>مجتمع اقامتی لاکوده</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
          <Foter />
          {show && (
            <div className="w-full h-screen flex flex-col justify-center fixed dark:bg-gray-900 bg-gray-600 z-[60] top-0 dark:bg-opacity-80 bg-opacity-60">
              <div className="bg-screenLight dark:bg-border backdrop-blur-sm dark:bg-opacity-90  max-w-[80vw] self-center rounded-3xl border-btn border-2 border-dashed p-6 md:p-10 ">
                <p className="text-center text-[19px]  pb-1 text-green-500 font-bold">
                  رزرو اولیه شما با موفقیت ثبت شد.
                </p>
                <p className="text-center text-[19px] pb-3 lg:pb-5 text-green-500 font-bold">
                  کد پیگیری {code}{" "}
                </p>
                <p className=" font-bold">مهمان عزیز</p>
                <p className="text-blue-500 font-semibold ">
                  جهت نهایی شدن رزرو ویلای شما تیم پشتیبانی لاکوده در اسرع وقت
                  با شما تماس خواهد گرفت.
                </p>

                <div>
                  <p>جهت ارتباط با ما به این شماره تماس بگیرید</p>
                  <a
                    href="tel:09134260356"
                    className="text-lg font-bold flex gap-1"
                  >
                    <span>0356</span>
                    <span>426</span>
                    <span>0913</span>
                  </a>
                </div>
                <div className=" flex pt-10">
                  <div>تاریخ ورود</div>{" "}
                  <div className="pr-3">
                    {new Date(
                      rangeDays.f.date?.split("T")[0]
                    ).toLocaleDateString("fa-IR-u-nu-latn", option)}
                  </div>
                </div>
                <div className="flex">
                  <div className="">تاریخ خروج</div>{" "}
                  <div className="pr-3 ">
                    {new Date(
                      rangeDays.s.date?.split("T")[0]
                    ).toLocaleDateString("fa-IR-u-nu-latn", option)}
                  </div>
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
                      {ISdisss[0]
                        ? parseInt(
                            seletedDays.reduce(
                              (partialSum, a) => partialSum + a,
                              0
                            ) - ISdisss[1]
                          ).toLocaleString()
                        : daysdis
                            .reduce((partialSum, a) => partialSum + a, 0)
                            .toLocaleString()}{" "}
                      تومان
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <p>جمع مبلغ قابل پرداخت</p>
                  <p>
                    {ISdisss[0]
                      ? parseInt(ISdisss[1]).toLocaleString()
                      : parseInt(
                          seletedDays.reduce(
                            (partialSum, a) => partialSum + a,
                            0
                          ) -
                            daysdis.reduce((partialSum, a) => partialSum + a, 0)
                        ).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
                <button
                  onClick={() => {
                    setRangeDays({ f: "", s: "", m: "", y: "" });
                    setshow(false);
                    setISDis([false, ""]);
                    setDis("");
                  }}
                  className="w-full text-center mt-8  px-10 py-3 hover:bg-blue-800 duration-200 cursor-pointer rounded-2xl bg-btn font-bold  text-white"
                >
                  تایید
                </button>
              </div>
            </div>
          )}
          {corat && (
            <div className="w-full h-screen flex flex-col justify-center fixed dark:bg-gray-900 bg-gray-600 z-[66] top-0 dark:bg-opacity-80 bg-opacity-60">
              <div className="bg-screenLight dark:bg-border backdrop-blur-sm dark:bg-opacity-90  max-w-[80vw] self-center rounded-3xl border-btn border-2 border- p-10 ">
                <p className="text-center text-[18px]  pb-1 text-btn font-bold">
                  آیا تمایل به ادامه رزرو دارید؟{" "}
                </p>

                <div>
                  <p>جهت ارتباط با ما به این شماره تماس بگیرید</p>
                  <a
                    href="tel:09134260356"
                    className="text-lg font-bold flex gap-1"
                  >
                    <span>0356</span>
                    <span>426</span>
                    <span>0913</span>
                  </a>
                </div>
                <div className=" flex pt-10">
                  <div>تاریخ ورود</div>{" "}
                  <div className="pr-3">
                    {new Date(
                      rangeDays.f.date?.split("T")[0]
                    ).toLocaleDateString("fa-IR-u-nu-latn", option)}
                  </div>
                </div>
                <div className="flex">
                  <div className="">تاریخ خروج</div>{" "}
                  <div className="pr-3 ">
                    {new Date(
                      rangeDays.s.date?.split("T")[0]
                    ).toLocaleDateString("fa-IR-u-nu-latn", option)}
                  </div>
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
                      {ISdisss[0]
                        ? parseInt(
                            seletedDays.reduce(
                              (partialSum, a) => partialSum + a,
                              0
                            ) - ISdisss[1]
                          ).toLocaleString()
                        : daysdis
                            .reduce((partialSum, a) => partialSum + a, 0)
                            .toLocaleString()}{" "}
                      تومان
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <p>جمع مبلغ قابل پرداخت</p>
                  <p>
                    {ISdisss[0]
                      ? parseInt(ISdisss[1]).toLocaleString()
                      : parseInt(
                          seletedDays.reduce(
                            (partialSum, a) => partialSum + a,
                            0
                          ) -
                            daysdis.reduce((partialSum, a) => partialSum + a, 0)
                        ).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>

                {loadingButton ? (
                  <button
                    disabled={true}
                    className="w-full  text-center mt-8   py-3  duration-200 cursor-not-allowed rounded-2xl bg-btn font-bold  text-white"
                  >
                    <div dir="rtl" className="flex justify-center">
                      <div className="self-center">
                        <svg
                          className="w-5 h-5 mx-3 -ml-1 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                      <p className="mx-2 px-2">صبور باشید...</p>{" "}
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={submitHand}
                    className="w-full text-center mt-8  px-10 py-3 hover:bg-blue-800 duration-200 cursor-pointer rounded-2xl bg-btn font-bold  text-white"
                  >
                    ادامه و رزرو{" "}
                  </button>
                )}
                <button
                  onClick={() => setcorat(false)}
                  className="w-full text-center mt-2 px-9 hover:text-white py-2 hover:bg-red-500 duration-200 cursor-pointer rounded-2xl text-red-500 font-bold  border-2 border-red-500"
                >
                  لغو{" "}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {!villaInf?.images[0] && (
        <div className="h-screen flex justify-center">
          <div className="flex">
            <div className="self-center">
              <svg
                class="w-10 h-10 mr-3 -ml-1 text-btn animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default withRouter(VillaPagee);
