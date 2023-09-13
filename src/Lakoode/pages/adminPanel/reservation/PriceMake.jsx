import React, { useEffect, useState } from "react";
import Calandre from "../../../components/admin/calander/Calandre";
import { useGetvillalistQuery } from "../../../redux/services/movieDatabase";
import axios from "axios";
import { toast } from "react-toastify";
// require('persian-date');
const PriceMake = () => {
  const [rangeDaysForUpdate, setRangeDaysForUpdate] = useState({
    day: "",
    m: "",
    y: "",
  });
  const optionsMnum = {
    month: "numeric",
  };
  const nowMnum = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsMnum);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7103/api/Admin/Villa/GetAll/", {
        withCredentials: true,
      })
      .then((r) => {
        setData(r.data);
      })
      .catch((r) => console.log(r));
  }, []);
  const [villa, setvilla] = useState("");
  let seletedDays = [];
  const [rangeDays, setRangeDays] = useState({
    f: "",
    s: "",
    y: "",
    m: nowMnum,
  });

  if (rangeDays.f !== "" && rangeDays.s === "") {
    seletedDays.push(rangeDays.f);
  }

  if (rangeDays.f !== "" && rangeDays.s !== "" && rangeDays.f > rangeDays.s) {
    for (let i = rangeDays.s; i <= rangeDays.f; i++) {
      seletedDays.push(i);
    }
  }

  if (rangeDays.f !== "" && rangeDays.s !== "" && rangeDays.f < rangeDays.s) {
    for (let i = rangeDays.f; i <= rangeDays.s; i++) {
      seletedDays.push(i);
    }
  }
  const [prise, setPrise] = useState("");
  const [discount, setdiscount] = useState("0");
  const [state, setState] = useState(true);

  const submitHand = () => {
    axios({
      withCredentials: true,
      method: "post",
      url: `https://localhost:7103/api/Admin/Reservation/AddPriceToDays`,
      data: {
        villaId: villa,
        days: seletedDays,
        price: prise,
        month: rangeDays.m,
        disscount: discount,
        year: rangeDays.y,
      },
    })
      .then(function (response) {
        setState(!state);
        setPrise("");
        setdiscount("0");
        setRangeDays({ f: "", s: "", y: "", m: "" });
        toast.success("قیمت با موفقیت ثبت شد", {
          autoClose: 1100,
          position: "top-left",
        });
      })
      .catch(function (response) {});
  };

  const updateHand = () => {
    axios({
      withCredentials: true,

      method: "post",
      url: `https://localhost:7103/api/Admin/Reservation/UpdatePricedDays`,
      data: {
        villaId: villa,
        day: rangeDaysForUpdate.day,
        price: prise,
        month: rangeDaysForUpdate.m,
        disscount: discount,
        year: rangeDaysForUpdate.y,
      },
    })
      .then(function (response) {
        setState(!state);

        setPrise("");
        setdiscount("0");
        setRangeDays({ f: "", s: "", y: "", m: "" });
        setRangeDaysForUpdate({
          day: "",
          m: "",
          y: "",
        });
        toast.success("قیمت با موفقیت تغییر یافت", {
          autoClose: 1100,
          position: "top-left",
        });
      })
      .catch(function (response) {});
  };
  useEffect(() => {
    setState(!state);
  }, [villa]);
  const optionsY = {
    year: "numeric",
  };

  let nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  const [year, setyear] = useState(nowYear);

  return (
    <div>
      {/* <div>
        <h1 className="text-[23px] font-bold">   تعیین قیمت</h1>
      </div> */}
      <div className="flex mt-16 p-3 ">
        <p className="text-[18px] self-center font-bold">
          تعیین قیمت برای ویلای :
        </p>
        <select
          onChange={(e) => setvilla(e.target.value)}
          name=""
          id=""
          className="px-12 dark:bg-border mx-5 py-4 rounded-2xl text-[18px] font-bold"
        >
          <option value="">انتخاب کنید</option>
          {data?.data?.map((item) => (
            <option value={item.id}> {item.name}</option>
          ))}
        </select>
      </div>

      <div
        className={`${
          rangeDays.f === "" &&
          rangeDaysForUpdate.day === "" &&
          "opacity-60 cursor-not-allowed"
        } mt-10 bg-white   mx-5  dark:bg-border lg:mx-10 p-5 rounded-3xl`}
      >
        <div>
          <p className="text-lg flex font-semibold">
            <span>تعیین قیمت در </span>
            <span className="flex flex-wrap ">
              {seletedDays?.map((d) => (
                <span className="m-1 text-center px-3 rounded-lg bg-textPDark bg-opacity-60 text-white w-10 ">
                  {d}
                </span>
              ))}
              <span
                className={`mx-1 px-3 rounded-lg bg-textPDark bg-opacity-60 text-white w-10 ${
                  rangeDaysForUpdate.day === "" && "hidden"
                } `}
              >
                {rangeDaysForUpdate.day}
              </span>
            </span>
            <span className="min-w-[50px] flex">
              /{rangeDays?.m} /{rangeDays.y}
            </span>
          </p>
        </div>
        <div className="flex mt-8 lg:justify-between lg:flex-row flex-col justify-start">
          <div>
            <div className="flex flex-col md:flex-row ">
              <p className="md:self-center">قیمت را وارد کنید</p>
              <div>
                <input
                  disabled={
                    ((rangeDays.f === "" && rangeDaysForUpdate.day === "") ||
                      villa === "") &&
                    true
                  }
                  onChange={(e) => setPrise(e.target.value)}
                  value={prise}
                  type="text"
                  dir="ltr"
                  className={` ${
                    ((rangeDays.f === "" && rangeDaysForUpdate.day === "") ||
                      villa === "") &&
                    "opacity-60 cursor-not-allowed"
                  } text-[20px] dark:bg-textPDark font-semibold outline-none focus:ring-2 focus:ring-btn  bg-screenLight px-4 h-12 mr-4 ml-2 rounded-2xl`}
                />
                تومان
              </div>
            </div>
            <div className="flex flex-row my-4 ">
              <p className="md:self-center self-center">
                میزان تخفیف را وارد کنید
              </p>
              <div>
                <input
                  disabled={
                    ((rangeDays.f === "" && rangeDaysForUpdate.day === "") ||
                      villa === "") &&
                    true
                  }
                  onChange={(e) => setdiscount(e.target.value)}
                  value={discount.toLocaleString()}
                  type="text"
                  dir="ltr"
                  className={`${
                    ((rangeDays.f === "" && rangeDaysForUpdate.day === "") ||
                      villa === "") &&
                    "opacity-60 cursor-not-allowed"
                  } text-[20px] ml-1 dark:bg-textPDark font-semibold outline-none focus:ring-2 focus:ring-btn  bg-screenLight px-2 w-32 h-12 mr-4 rounded-2xl`}
                />
                تومان
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text- mt-5 lg:mx-20">
          {rangeDaysForUpdate.day !== "" ? (
            <button
              onClick={updateHand}
              disabled={villa === "" && true}
              className={`${
                villa == "" && "opacity-60 cursor-not-allowed"
              } bg-btn text-white lg:w-[20vw] w-[60vw]  py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold`}
            >
              ویراش قیمت
            </button>
          ) : (
            <button
              onClick={submitHand}
              disabled={(rangeDays.f === "" || villa === "") && true}
              className={`${
                (rangeDays.f === "" || villa == "") &&
                "opacity-60 cursor-not-allowed"
              } bg-btn text-white lg:w-[20vw] w-[60vw]  py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold`}
            >
              ثبت
            </button>
          )}
        </div>
      </div>

      <div className="mt-10 bg-white  mx-2  dark:bg-border lg:mx-10 px-3 lg:p-5 rounded-3xl">
        <Calandre
          villaa={villa}
          // calData={calData}
          seletedDays={seletedDays}
          setRangeDays={setRangeDays}
          rangeDays={rangeDays}
          rangeDaysForUpdate={rangeDaysForUpdate}
          setRangeDaysForUpdate={setRangeDaysForUpdate}
          state={state}
          setState={setState}
          year={year}
          setyear={setyear}
        />
      </div>
    </div>
  );
};

export default PriceMake;
