import React, { useEffect, useState } from "react";
import Calandre from "../../../components/admin/calander/Calandre";
import { useGetvillalistQuery } from "../../../redux/services/movieDatabase";
import axios from "axios";
import { toast } from "react-toastify";
// require('persian-date');
const PriceMake = () => {
  const { data, isFetching, isLoading, error } = useGetvillalistQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const [villa, setvilla] = useState("");
  let seletedDays = [];
  const [rangeDays, setRangeDays] = useState({ f: "", s: "", y: "", m: "" });

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
  const [discount, setdiscount] = useState("");
  useEffect(()=>{
    axios({
      method: "post",
      url: `https://localhost:7103/api/Reservation/GetPricedDays`,
      // data: {
      //   // villaID: villa,
      //   days: seletedDays,
      //   price: prise,
      //   month: rangeDays.m,
      //   // discount: "200",
      // },
    })
      .then(function (response) {
        // toast.success("قیمت با موفقیت ثبت شد", {
        //   autoClose: 1100,
        //   position: "top-left",
        // });
        console.log(response.data.data);
      })
      .catch(function (response) {
      });
   
  },[])

 const submitHand=()=>{
  axios({
    method: "post",
    url: `https://localhost:7103/api/Reservation/AddPriceToDays`,
    data:  {
      villaId: villa,
      days: seletedDays,
      price: prise,
      month: rangeDays.m,
      disscount:discount
    },
  })
    .then(function (response) {
      setPrise('');
      setdiscount('');
      setRangeDays({ f: "", s: "", y: "", m: "" });
      toast.success("قیمت با موفقیت ثبت شد", {
        autoClose: 1100,
        position: "top-left",
      });
    })
    .catch(function (response) {
    });
 }

  // new Date(`${rangeDays.y}/${rangeDays.m}/${seletedDays[0]}`).toDateString('fa')
  // date: rangeDays.f,
  // for (let i = rangeDays.f<rangeDays.s ? 1 : 0  ;i  < seletedDays.length ; i++) {
  //   reservDays.push({
  //     villaID: villa,
  //     date: seletedDays[i],
  //     prise,
  //     discount,
  //     disLable,
  //     incLable,
  //     sureLable,
  //   });
  // }

  // console.log(new Date([1402,6,3]).toDateString('fa'));
  //   for (let i = 0; i < rangeDays?.length; i++) {
  //     ReservHand(i);
  //   }
  // console.log(reservDays);
  return (
    <div>
      <div>
        <h1 className="text-[23px] font-bold"> رزرواسیون و تعیین قیمت</h1>
      </div>
      <div className="flex mt-16 p-3 ">
        <p className="text-[18px] self-center font-bold">
          رزرواسیون و تعیین قیمت برای ویلای :
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
          rangeDays.f === "" && "opacity-60 cursor-not-allowed"
        } mt-10 bg-white   mx-5  dark:bg-border lg:mx-10 p-5 rounded-3xl`}
      >
        <div>
          <p className="text-lg font-semibold">
            تعیین قیمت در{" "}
            {seletedDays?.map((d) => (
              <span className="mx-1 px-3 rounded-lg bg-textPDark bg-opacity-60 text-white w-10 ">
                {d}
              </span>
            ))}{" "}
            /{rangeDays?.m} /{rangeDays.y}
          </p>
        </div>
        <div className="flex mt-8 lg:justify-between lg:flex-row flex-col justify-start">
          <div>
            <div className="flex flex-col md:flex-row ">
              <p className="md:self-center">قیمت را وارد کنید</p>
              <div>
                <input
                  disabled={rangeDays.f === "" && true}
                  onChange={(e) => setPrise(e.target.value)}
                  value={prise}
                  type="text"
                  dir="ltr"
                  className={` ${
                    rangeDays.f === "" && "opacity-60 cursor-not-allowed"
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
                  disabled={rangeDays.f === "" && true}
                  onChange={(e) => setdiscount(e.target.value)}
                  value={discount.toLocaleString()}
                  type="text"
                  dir="ltr"
                  className={`${
                    rangeDays.f === "" && "opacity-60 cursor-not-allowed"
                  } text-[20px] ml-1 dark:bg-textPDark font-semibold outline-none focus:ring-2 focus:ring-btn  bg-screenLight px-2 w-32 h-12 mr-4 rounded-2xl`}
                />
                تومان
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text- mt-5 lg:mx-20">
          <button
          onClick={submitHand}
            disabled={rangeDays.f === "" && true}
            className={`${
              rangeDays.f === "" && "opacity-60 cursor-not-allowed"
            } bg-btn text-white lg:w-[20vw] w-[60vw]  py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold`}
          >
            ثبت
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white  mx-2  dark:bg-border lg:mx-10 px-3 lg:p-5 rounded-3xl">
        <Calandre
          seletedDays={seletedDays}
          setRangeDays={setRangeDays}
          rangeDays={rangeDays}
        />
      </div>
    </div>
  );
};

export default PriceMake;
