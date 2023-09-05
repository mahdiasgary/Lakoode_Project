import React, { useEffect, useState } from "react";
import Calandre from "../../../components/admin/calander/Calandre";
import { useGetvillalistQuery } from "../../../redux/services/movieDatabase";
import Calandre2 from "../../villaPage/Calandre2";
import axios from "axios";

const Resevation = () => {
  const optionsY = {
    year: "numeric",
  };
  const { data, isFetching, isLoading, error } = useGetvillalistQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  let nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  const [year, setyear] = useState(nowYear);
  const [id, setId] = useState();

  // let priceToday = useHistory()?.location.state.priceToday;
  const [villaInf, setvillaInf] = useState();
  useEffect(() => {
    axios.get(`https://localhost:7103/api/Villa/Get?Id=${id}`).then((res) => {
      setvillaInf(res.data.data);
    });
  }, []);

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
    function dateRange(startDate, endDate, steps = 1) {
      const dateArray = [];
      let currentDate = new Date(startDate);

      while (currentDate <= new Date(endDate)) {
        seletedDaysOnCal.push(
          new Date(currentDate).toISOString().split("T")[0]
        );
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
  const [reservsDays, setreservsDays] = useState({ f: "", s: "" });
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  useEffect(() => {
    setState(!state);
  }, [id]);

  return (
    <div>
      {/* <div>
        <h1 className="text-[23px] font-bold"> رزرواسیون   </h1>
      </div> */}
      <div className="flex mt-16 p-3 ">
        <p className="text-[18px] self-center font-bold">
          رزرواسیون برای ویلای :
        </p>
        <select
          onChange={(e) => setId(e.target.value)}
          value={id}
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
          // rangeDaysForUpdate.day === "" &&
          "opacity-60 cursor-not-allowed"
        } mt-10 bg-white   mx-5  dark:bg-border lg:mx-10 p-5 rounded-3xl`}
      >
        <div>
          <p className="text-lg flex font-semibold">
            <span> رزرواسیون در تاریخ</span>
          </p>
        </div>
        <div className="flex mt-8 lg:justify-between  flex-col justify-start">
          <div className="flex">
            <p className="self-center">از</p>
            <div className=" dark:bg-gray-700 bg-opacity-30 mx-2 px-7 py-2 rounded-xl text-[18px] font-bold ">
              {rangeDays?.f?.shamsiDate}
            </div>
          </div>
          <div className="flex mt-2">
            <p className="self-center">تا</p>
            <div className=" dark:bg-gray-700 bg-opacity-30 mx-2 px-7 py-2 rounded-xl text-[18px] font-bold ">
              {rangeDays?.s?.shamsiDate}
            </div>
          </div>        </div>
        <div className="text-center lg:text- mt-5 lg:mx-20">
          {/* {rangeDaysForUpdate.day !== "" ? (
            <button
              onClick={updateHand}
              disabled={villa === "" && true}
              className={`${
                villa == "" && "opacity-60 cursor-not-allowed"
              } bg-btn text-white lg:w-[20vw] w-[60vw]  py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold`}
            >
              ویراش قیمت
            </button>
          ) : ( */}
          <button
            // onClick={submitHand}
            // disabled={(rangeDays.f === "" || villa === "") && true}
            className={`${
              rangeDays.f === "" && "opacity-60 cursor-not-allowed"
            } bg-btn text-white lg:w-[20vw] w-[60vw]  py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold`}
          >
            رزرو برای {seletedDaysOnCal.length!==0 ? seletedDaysOnCal.length-1 : 0 } شب اقامت 
          </button>
          {/* )} */}
        </div>
      </div>
      <div className="mt-10">
        <Calandre2
          villaa={id}
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
  );
};

export default Resevation;
