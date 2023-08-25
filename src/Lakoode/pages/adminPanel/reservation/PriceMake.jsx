import React, { useEffect, useState } from "react";
import Calandre from "../../../components/admin/calander/Calandre";
// require('persian-date');
const PriceMake = () => {
  const [villa, setvilla] = useState("");
  let seletedDays = [];

  const [rangeDays, setRangeDays] = useState({ f: "", s: "", y: "", m: "" });
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
  const [prise, setPrise] = useState(2000);
  const [discount, setdiscount] = useState(0);
  const [disLable, setdisLable] = useState(false);
  const [incLable, setincLable] = useState(false);
  const [sureLable, setsureLable] = useState(false);
  let reservDays = [
    {
      villaID: villa,
      date: rangeDays.f,
      prise,
      discount,
      disLable,
      incLable,
      sureLable,
    },
  ];
  // new Date(`${rangeDays.y}/${rangeDays.m}/${seletedDays[0]}`).toDateString('fa')
  for (let i = 1; i < seletedDays.length; i++) {
    reservDays.push({
      villaID: villa,
      date: seletedDays[i],
      prise,
      discount,
      disLable,
      incLable,
      sureLable,
    });
  }

  // console.log(new Date([1402,6,3]).toDateString('fa'));
  //   for (let i = 0; i < rangeDays?.length; i++) {
  //     ReservHand(i);
  //   }
  //   console.log(reservDays);
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
          <option value="1">ویلا 1</option>
          <option value="2">ویلا 2</option>
          <option value="3">ویلا 3</option>
          <option value="4">ویل ا4</option>
          <option value="5">ویلا 5</option>
          <option value="6">ویلا 6</option>
          <option value="7">ویلا 7</option>
          <option value="8">ویلا 8</option>
          <option value="b2">ویلا B2</option>
        </select>
      </div>

      <div className="mt-10 bg-white  mx-5  dark:bg-border lg:mx-10 p-5 rounded-3xl">
        <div>
          <p className="text-lg font-semibold">
            تعیین قیمت در{" "}
            {reservDays.map((d) => (
              <span className="mx-1 px-2 w-10">{d.date}-</span>
            ))}{" "}
            تیر 1402
          </p>
        </div>
        <div className="flex mt-8 lg:justify-between lg:flex-row flex-col justify-start">
          <div>
            <div className="flex flex-col md:flex-row ">
              <p className="md:self-center">قیمت را وارد کنید</p>
              <div>
                <input
                  onChange={(e) => setPrise(e.target.value)}
                  value={prise}
                  type="text"
                  dir="ltr"
                  className="text-[20px] dark:bg-textPDark font-semibold outline-none focus:ring-2 focus:ring-btn  bg-screenLight px-4 h-12 mr-4 ml-2 rounded-2xl"
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
                  onChange={(e) => setdiscount(e.target.value)}
                  value={discount.toLocaleString()}
                  type="text"
                  dir="ltr"
                  className="text-[20px] ml-1 dark:bg-textPDark font-semibold outline-none focus:ring-2 focus:ring-btn  bg-screenLight px-2 w-32 h-12 mr-4 rounded-2xl"
                />
                تومان
              </div>
            </div>
          </div>
          <div className="flex  ">
            <div className="flex my-t flex-col md:flex-wrap w-[300px] ">
              <div className="w-[200px]">
                <input
                  className="w-8 self-center "
                  type="checkbox"
                  id="disLayandInput"
                />
                <label
                  className="inline-block self-center pl-[0.15rem] hover:cursor-pointer"
                  for="disLayandInput"
                >
                  برچسب تخفیف
                </label>
              </div>
              <div className="w-[200px] my-2">
                <input
                  className="w-8 self-center "
                  type="checkbox"
                  id="incLayandInput"
                />
                <label
                  className="inline-block self-center pl-[0.15rem] hover:cursor-pointer"
                  for="incLayandInput"
                >
                  برچسب افزایش قیمت
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-end mt-5 lg:mx-20">
          <button className="bg-btn text-white lg:w-[20vw] w-[60vw]  py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold">
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
